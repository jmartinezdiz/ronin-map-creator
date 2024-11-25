///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function MapCreatorGridContent(props) {

  // Props
  const { value, size } = props;

  const style = {
    width: `${size}px`,
    height: `${size}px`,
  };

  // Render
  return (
    <div className="map-grid-element-container" style={style}>
      <span className="map-grid-element-content">{value}</span>
    </div>
  );
}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapCreatorGridContent;
