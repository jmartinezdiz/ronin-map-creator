///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// COMPONENTS
import MapCreatorGridContent from "./MapCreatorGridContent";

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function MapCreatorGridBody(props) {

  // Props
  const { width, height, size, config } = props;

  // Render
  return (
    <tbody>{getCells(width, height, size, config)}</tbody>
  );

}

///////////////////////////////////////////////////////////////
// AUXILIAR METHODS
///////////////////////////////////////////////////////////////
function getCells(width, height, size, config) {

  // Constants
  const {
    gridXSize,
    gridYSize,
    gridLineSize,
    gridLineColor
  } = config;
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    border: `${gridLineSize}px solid ${gridLineColor}`,
  };

  // Variables
  let body = [];

  // Render
  for(let indexX = 0; indexX < gridXSize; indexX++) {
    let row = [];
    for(let indexY = 0; indexY <= gridYSize; indexY++) {
      row.push(
        getCell({ indexX, indexY, size, value: indexX + 1, style, config })
      );
    }
    body.push(<tr key={`row-${indexX}`}>{row}</tr>);
  }
  return body;
}

function getCell({ indexX, indexY, size, value, style, config }) {

  // Constants
  const { gridYEnumUntil } = config;

  // Render
  return (
    <td width={size} height={size} key={`cell-${indexX}-${indexY}`} style={style}>
      {
        indexY == 0 && indexX < gridYEnumUntil ?
          <MapCreatorGridContent size={size} value={value} /> :
          null
      }
    </td>
  );
}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapCreatorGridBody;
