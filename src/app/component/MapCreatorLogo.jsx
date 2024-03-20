///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// Resources
import logo from '/img/logo/ronin.jpg';

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function MapCreatorLogo(props) {

  // Props
  const { config } = props;

  // Constants
  const { logoOpacity } = config;
  const containerStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
  };
  const imageStyle = {
    opacity: `${logoOpacity}%`,
    width: "80%",
    height: "80%",
    float: "right",
    borderRadius: "50%",
  };

  // Render
  return (
    <div style={containerStyle}>
      <img src={logo} style={imageStyle} />
    </div>
  );
}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapCreatorLogo;
