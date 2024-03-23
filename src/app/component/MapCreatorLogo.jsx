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
  const { logoOpacity, logoBorderRadius } = config;
  const containerStyle = {
    position: "absolute",
    top: "20px",
    right: "20px",
    zIndex: 1000,
  };
  const imageStyle = {
    opacity: `${logoOpacity}%`,
    width: "80%",
    height: "80%",
    float: "right",
    borderRadius: `${logoBorderRadius}%`,
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
