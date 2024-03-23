///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// STANDARD
import { useState, useRef, useEffect } from 'react';

// MODELS
import Config from '../model/config';

// COMPONENTS
import MapCreatorFromImage from './MapCreatorFromImage';
import MapCreatorFromMap from './MapCreatorFromMap';
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
  const [config, setConfig] = useState(new Config());

  // Events
  const onChangeConfigForm = function(newConfig) {
    setConfig(new Config({ ...newConfig }));
  };

  // Render
  return (
    <div style={{ display: "block" }} >
      <MapCreatorConfigForm config={config} createFromMap={createFromMap} createFromImage={createFromImage} onChange={onChangeConfigForm} />
      {createFromMap && <MapCreatorFromMap mapImage={mapImage} onLoad={onLoad} config={config} />}
      {createFromImage && <MapCreatorFromImage mapImage={mapImage} onLoad={onLoad} config={config} />}
    </div>
  );

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapCreator;
