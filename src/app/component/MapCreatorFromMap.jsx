///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// STANDARD
import { useRef, useEffect } from 'react';
import { useTranslation } from "react-i18next";
import Map from 'ol/Map';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import { OSM } from 'ol/source';
import Geocoder from 'ol-geocoder';

// COMPONENTS
import MapCreatorGrid from './MapCreatorGrid';
import MapCreatorLogo from './MapCreatorLogo';

// MODELS
import MapInfo from '../model/map-info';

///////////////////////////////////////////////////////////////
// CONSTANT
///////////////////////////////////////////////////////////////
const SATELLITE_LAYER_SOURCE_URL = 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
const DEFAULT_CENTER_COORDINATES = [-971753.4761257102, 5193724.166082324]; // VIGO
const DEFAULT_ZOOM = 13;

///////////////////////////////////////////////////////////////
// STYLES
///////////////////////////////////////////////////////////////
import 'ol-geocoder/dist/ol-geocoder.min.css';

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function MapCreatorFromMap(props) {

  // Props
  const { onLoad, mapInfo } = props;
  const { config, mapInfoFromMap } = mapInfo;

  // References
  const containerToDownloadRef = useRef(null);
  const mapContainerRef = useRef(null);
  const mapRef = useRef(null);
  const geocoderControlRef = useRef(null);

  // Constants
  const { t, language } = useTranslation();
  const { mapLayer, mapWidth, mapHeight } = config;
  const layers = {
    street: new TileLayer({ source: new OSM() }),
    satellite: new TileLayer({
      source: new XYZ({
        url: SATELLITE_LAYER_SOURCE_URL,
        maxZoom: 19,
        crossOrigin: "Anonymous",
      })
    }),
  };

  // Variables
  const containerToDownloadStyle = {
    width: `${mapWidth}px`,
    height: `${mapHeight}px`,
    overflow: "hidden",
    position: "relative",
  };
  const getMapInfo = function() {
    let view = mapRef.current.getView();
    return new MapInfo({
      config,
      mapInfoFromMap: {
        center: view.getCenter(),
        resolution: view.getResolution(),
        zoom: view.getZoom(),
        rotation: view.getRotation(),
      },
    });
  };

  // Callbacks
  useEffect(() => {
    onLoad({
      mapRef: containerToDownloadRef,
      getMapInfo: getMapInfo,
    });
    return () => {
      onLoad({ mapRef: null })
    };
  }, [containerToDownloadRef, config]);
  useEffect(() => {
    if (mapContainerRef.current && !mapRef.current) {
      const view = new View({
        center: DEFAULT_CENTER_COORDINATES,
        zoom: DEFAULT_ZOOM,
      });
      mapRef.current = new Map({
        layers: [layers[mapLayer]],
        view: view,
        target: mapContainerRef.current,
        controls: [],
      });
      const geocoderControl = new Geocoder('nominatim', {
        provider: 'osm',
        targetType: 'text-input',
        lang: language,
        label: t("mapCreatorFromMap.searchLabel"),
        placeholder: t("mapCreatorFromMap.searchPlaceholder"),
        limit: 5,
        keepOpen: false,
        preventMarker: true,
        target: geocoderControlRef.current,
      });
      mapRef.current.addControl(geocoderControl);
    }
  }, [mapContainerRef, mapRef]);
  useEffect(() => {
    mapRef.current.setLayers([layers[mapLayer]])
  }, [mapLayer]);
  useEffect(() => {
    let view = mapRef.current.getView();
    let { center, resolution, rotation, zoom } = mapInfoFromMap || {};
    if (center != null && center != undefined) view.setCenter(center);
    if (resolution != null && resolution != undefined) view.setResolution(resolution);
    if (rotation != null && rotation != undefined) view.setRotation(rotation);
    if (zoom != null && zoom != undefined) view.setZoom(zoom);
  }, [mapInfoFromMap]);

  // Renders
  return (
    <>
      <div className="map-creator-map-creator-controls">
        <div ref={geocoderControlRef} />
      </div>
      <div ref={containerToDownloadRef} style={containerToDownloadStyle}>
        <MapCreatorGrid width={mapWidth} height={mapHeight} config={config} />
        <MapCreatorLogo config={config} />
        <div ref={mapContainerRef} style={{width: `${mapWidth}px`, height: `${mapHeight}px` }} />
      </div>
    </>
  );

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapCreatorFromMap;
