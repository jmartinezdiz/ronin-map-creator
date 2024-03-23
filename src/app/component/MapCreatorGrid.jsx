///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// COMPONENTS
import MapCreatorGridHead from './MapCreatorGridHead';
import MapCreatorGridBody from './MapCreatorGridBody';

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function MapCreatorGrid(props) {

  // Props
  const { width, height, config } = props;

  // Constants
  const {
    gridTextSize,
    gridTextFont,
    gridTextColor,
  } = config;

  // Variables
  const getTableStyle = function() {
    return {
      maxWidth: `${width}px`,
      maxHeight: `${height}px`,
      fontSize: `${gridTextSize}px`,
      fontFamily: gridTextFont,
      color: gridTextColor,
      zIndex: 999,
    }
  };

  // Render
  return (
    <div className="map-creator-grid-container">
      <table className="map-creator-grid" style={getTableStyle()}>
        <MapCreatorGridHead width={width} height={height} config={config} />
        <MapCreatorGridBody width={width} height={height} config={config} />
      </table>
    </div>
  );
}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapCreatorGrid;
