///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// STANDARD
import { useState, useRef, useEffect } from 'react';

// MODELS
import Config from '../model/config';

// COMPONENTS
import MapCreatorGrid from './MapCreatorGrid';
import MapCreatorLogo from './MapCreatorLogo';
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
  const { mapImage, onLoad } = props;

  // State

  const [config, setConfig] = useState(new Config());

  // References
  const containerRef = useRef(null);

  // Callbacks
  useEffect(() => {
    onLoad({ mapRef: containerRef });
    return () => {
      onLoad({ mapRef: null })
    };
  }, []);

  // Constants
  const { width, height } = mapImage;
  const containerStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundImage: `url(${URL.createObjectURL(mapImage.file)})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    overflow: "hidden",
    position: "relative",
  };

  // Events
  const onChangeConfigForm = function(newConfig) {
    setConfig(new Config({ ...newConfig }));
  };

  // Render
  return (
    <div style={{ display: "block" }} >
      <div ref={containerRef} className="mb-3" style={containerStyle}>
        <MapCreatorGrid width={width} height={height} config={config} />
        <MapCreatorLogo config={config} />
      </div>
      <MapCreatorConfigForm config={config} onChange={onChangeConfigForm} />
    </div>
  );

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapCreator;
