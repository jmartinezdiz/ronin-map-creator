///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// COMPONENTS
import MapCreatorGridContent from "./MapCreatorGridContent";

// LIB
import succ from '../lib/succ';

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function MapCreatorGridHead(props) {

  // Props
  const { width, height, config } = props;

  // Render
  return (
    <thead>
      <tr>{getCells(width, height, config)}</tr>
    </thead>
  );

}

///////////////////////////////////////////////////////////////
// AUXILIAR METHODS
///////////////////////////////////////////////////////////////
function getCells(width, height, config) {

  // Constants
  const {
    gridXSize,
    gridYSize,
    gridLineSize,
    gridLineColor
  } = config;
  const size = Math.min(
    Math.floor((width / gridYSize) - (4 * gridLineSize)),
    Math.floor((height / gridXSize) - (4 * gridLineSize))
  );
  const style = {
    width: `${size}px`,
    height: `${size}px`,
    border: `${gridLineSize}px solid ${gridLineColor}`,
  };

  // Variables
  let head = [];
  let currentHead = "A";

  // Render
  for(let index = 0; index <= gridYSize; index++) {
    head.push(getCell({ index, size, value: currentHead, style, config }));
    if (index > 1) currentHead = succ(currentHead);
  }
  return head;
}

function getCell({ index, size, value, style, config }) {

  // Constants
  const { gridXEnumUntil } = config;

  // Render
  return (
    <th width={size} height={size} key={`head-${index}`} style={style}>
      {
        index > 0 && index <= gridXEnumUntil ?
          <MapCreatorGridContent value={(index == 1 ? value : succ(value))} /> :
          null
      }
    </th>
  );
}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapCreatorGridHead;
