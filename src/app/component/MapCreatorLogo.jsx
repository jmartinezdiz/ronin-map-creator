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
  const { logoOpacity, logoBorderRadius, logoMarginTop, logoMarginRight } = config;
  const containerStyle = {
    position: "absolute",
    top: `${logoMarginTop}px`,
    right: `${logoMarginRight}px`,
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
