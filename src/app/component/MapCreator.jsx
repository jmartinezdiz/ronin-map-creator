///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// STANDARD
import { useState, useRef, useEffect } from 'react';

// MODELS
import MapInfo from '../model/map-info';
import Config from '../model/config';

// COMPONENTS
import MapCreatorFromImage from './MapCreatorFromImage';
import MapCreatorFromMap from './MapCreatorFromMap';
import MapCreatorFromMapLoadMapInfoForm from './MapCreatorFromMapLoadMapInfoForm';
import MapCreatorConfigForm from './MapCreatorConfigForm';

///////////////////////////////////////////////////////////////
// STYLES
///////////////////////////////////////////////////////////////
import '../styles/map-creator.css';

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function MapCreator(props) {

  // Props
  const { mapImage, createFromMap, createFromImage, onLoad } = props;

  // State
  const [mapInfo, setMapInfo] = useState(new MapInfo({ config: new Config() }));

  // Events
  const onChangeMapInfoForm = function(newMapInfo) {
    setMapInfo(newMapInfo);
  };
  const onChangeConfigForm = function(newConfig) {
    setMapInfo(new MapInfo({
      config: new Config({ ...newConfig }),
      mapInfoFromMap: mapInfo.mapInfoFromMap,
    }));
  };

  // Render
  return (
    <div style={{ display: "block" }} >
      {createFromMap && <MapCreatorFromMapLoadMapInfoForm onChange={onChangeMapInfoForm} />}
      <MapCreatorConfigForm config={mapInfo.config} createFromMap={createFromMap} createFromImage={createFromImage} onChange={onChangeConfigForm} />
      {createFromMap && <MapCreatorFromMap onLoad={onLoad} mapInfo={mapInfo} />}
      {createFromImage && <MapCreatorFromImage mapImage={mapImage} onLoad={onLoad} mapInfo={mapInfo} />}
    </div>
  );

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapCreator;
