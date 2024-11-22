///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import Draw from 'ol/interaction/Draw.js';
import Overlay from 'ol/Overlay.js';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style.js';
import { LineString, Polygon } from 'ol/geom.js';
import { getArea, getLength } from 'ol/sphere.js';
import { unByKey } from 'ol/Observable.js';

///////////////////////////////////////////////////////////////
// CONSTANTS
///////////////////////////////////////////////////////////////
const DRAW_STYLE = new Style({
  fill: new Fill({
    color: 'rgba(255, 255, 255, 0.4)',
  }),
  stroke: new Stroke({
    color: 'rgba(255, 204, 51, 0.8)',
    lineDash: [10, 10],
    width: 2,
  }),
  image: new CircleStyle({
    radius: 5,
    stroke: new Stroke({
      color: 'rgba(255, 204, 51, 0.8)',
    }),
    fill: new Fill({
      color: 'rgba(255, 255, 255, 0.8)',
    }),
  }),
});

///////////////////////////////////////////////////////////////
// CLASSS
///////////////////////////////////////////////////////////////
class MapMeasureAdder {

  ///////////////////////////////////////////////////////////////
  // STATIC METHODS
  ///////////////////////////////////////////////////////////////
  static formatLine(line) {
    const length = getLength(line);
    return length > 100 ?
      `${Math.round((length / 1000) * 100) / 100} km` :
      `${Math.round(length * 100) / 100} m`;
  }

  static formatArea(polygon) {
    const area = getArea(polygon);
    return area > 10000 ?
      `${Math.round((area / 1000000) * 100) / 100} km<sup>2</sup>` :
      `${Math.round(area * 100) / 100} m<sup>2</sup>`;
  }

  static getMeasureTooltipInfo(geometry, coordinate) {
    if (geometry instanceof Polygon) {
      return {
        content: this.formatArea(geometry),
        tooltip: geometry.getInteriorPoint().getCoordinates(),
      };
    } else if (geometry instanceof LineString) {
      return {
        content: this.formatLine(geometry),
        tooltip: geometry.getLastCoordinate(),
      };
    } else {
      return { tooltip: coordinate };
    }
  }

  ///////////////////////////////////////////////////////////////
  // CONSTRUCTOR
  ///////////////////////////////////////////////////////////////
  constructor(map, source) {
    this.map = map;
    this.source = source;
    // VARIABLES
    this.draw = null;
    this.sketch = null;
    this.helpTooltipElement = null;
    this.helpTooltip = null;
    this.measureTooltipElement = null;
    this.measureTooltip = null;
    this.pointerMoveListener = null;
    this.mouseOutListener = null;
    this.changeGeometryListener = null;
    this.drawStartListener = null;
    this.drawEndListener = null;
  }

  ///////////////////////////////////////////////////////////////
  // INSTANCE METHODS
  ///////////////////////////////////////////////////////////////
  createHelpTooltip() {
    if (this.helpTooltipElement) {
      this.helpTooltipElement.remove();
    }
    this.helpTooltipElement = document.createElement('div');
    this.helpTooltipElement.className = 'ol-tooltip hidden';
    this.helpTooltip = new Overlay({
      element: this.helpTooltipElement,
      offset: [15, 0],
      positioning: 'center-left',
    });
    this.map.addOverlay(this.helpTooltip);
  }

  createMeasureTooltip() {
    if (this.measureTooltipElement) {
      this.measureTooltipElement.remove();
    }
    this.measureTooltipElement = document.createElement('div');
    this.measureTooltipElement.className = 'ol-tooltip ol-tooltip-measure';
    this.measureTooltip = new Overlay({
      element: this.measureTooltipElement,
      offset: [0, -15],
      positioning: 'bottom-center',
      stopEvent: false,
      insertFirst: false,
    });
    this.map.addOverlay(this.measureTooltip);
  }

  getNewDraw(drawType) {
    return new Draw({
      source: this.source,
      type: drawType,
      style: function(feature) {
        const geometryType = feature.getGeometry().getType();
        if (geometryType === drawType || geometryType === 'Point') {
          return DRAW_STYLE;
        }
      },
    });
  }

  addDrawToMap(drawType) {
    // Add draw to map
    this.draw = this.getNewDraw(drawType);
    this.map.addInteraction(this.draw);
    // Add tooltips
    this.createMeasureTooltip();
    this.createHelpTooltip();
    // Add events
    this.drawStartListener = this.draw.on('drawstart', (drawStartEvent) => {
      this.sketch = drawStartEvent.feature;
      this.changeGeometryListener = this.sketch.getGeometry().on('change', (e) => {
        let { content, tooltip } = this.constructor.getMeasureTooltipInfo(e.target, drawStartEvent.coordinate);
        this.measureTooltipElement.innerHTML = content;
        this.measureTooltip.setPosition(tooltip);
      });
    });
    this.drawEndListener = this.draw.on('drawend', () => {
      this.measureTooltipElement.className = 'ol-tooltip ol-tooltip-static';
      this.measureTooltip.setOffset([0, -7]);
      this.measureTooltipElement = null;
      this.sketch = null;
      this.createMeasureTooltip();
      unByKey(this.changeGeometryListener);
      this.changeGeometryListener = null;
    });
  }

  addMeasureFunctionToMap(drawType, options = {}) {
    const { tooltipMessage, tooltipContinueMessage } = options;
    // Reset previous measure if exists
    this.resetMeasureFunction();
    // Mouse movement event
    this.pointerMoveListener = this.map.on('pointermove', (e) => {
      if (!e.dragging) {
        this.helpTooltipElement.innerHTML = this.sketch ? tooltipContinueMessage : tooltipMessage;
        this.helpTooltip.setPosition(e.coordinate);
        this.helpTooltipElement.classList.remove('hidden');
      }
    });
    // Mouse out map event
    this.mouseOutListener = () => {
      this.helpTooltipElement?.classList?.add('hidden');
    };
    this.map.getViewport().addEventListener('mouseout', this.mouseOutListener);
    // Add functionalities to map
    this.addDrawToMap(drawType);
  }

  resetMeasureFunction() {
    // Remove listeners
    [
      this.pointerMoveListener,
      this.changeGeometryListener,
      this.drawStartListener,
      this.drawEndListener,
    ].forEach(function(listener) {
      listener && unByKey(listener);
    });
    this.map?.getViewport().removeEventListener('mouseout', this.mouseOutListener);
    // Remove elements
    this.helpTooltipElement?.remove();
    this.measureTooltipElement?.remove();
    this.map?.removeOverlay(this.helpTooltip);
    this.map?.removeOverlay(this.measureTooltip);
    this.source?.removeFeature(this.draw);
    this.map?.removeInteraction(this.draw);
    // Reset instance variables
    this.draw = null;
    this.sketch = null;
    this.helpTooltipElement = null;
    this.helpTooltip = null;
    this.measureTooltipElement = null;
    this.measureTooltip = null;
    this.pointerMoveListener = null;
    this.mouseOutListener = null;
    this.changeGeometryListener = null;
    this.drawStartListener = null;
    this.drawEndListener = null;
  }

  clearMeasures() {
    // Deletions, for avoid errors first get all elements and later remove them
    let features = [];
    this.source.getFeatures().forEach((x) => features.push(x) );
    features.forEach((x) => this.source.removeFeature(x));
    let overlays = [];
    this.map.getOverlays().forEach((x) => overlays.push(x));
    overlays.forEach((x) => this.map.removeOverlay(x) );
    this.source.clear();
    this.resetMeasureFunction();
  }

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapMeasureAdder;
