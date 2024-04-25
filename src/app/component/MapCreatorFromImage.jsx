///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// STANDARD
import { useRef, useEffect } from 'react';

// COMPONENTS
import MapCreatorGrid from './MapCreatorGrid';
import MapCreatorLogo from './MapCreatorLogo';

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function MapCreatorFromImage(props) {

  // Props
  const { mapImage, onLoad, mapInfo } = props;
  const { config } = mapInfo;

  // References
  const containerToDownloadRef = useRef(null);

  // Callbacks
  useEffect(() => {
    onLoad({ mapRef: containerToDownloadRef });
    return () => {
      onLoad({ mapRef: null })
    };
  }, [containerToDownloadRef]);

  // Constants
  const { width, height } = mapImage;
  const containerToDownloadStyle = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundImage: `url(${URL.createObjectURL(mapImage.file)})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    overflow: "hidden",
    position: "relative",
  };

  // Render
  return (
    <div ref={containerToDownloadRef} className="mb-3" style={containerToDownloadStyle}>
      <MapCreatorGrid width={width} height={height} config={config} />
      <MapCreatorLogo config={config} />
    </div>
  );

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapCreatorFromImage;
