///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// STANDARD
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { InputGroup, Form } from 'react-bootstrap';

///////////////////////////////////////////////////////////////
// CONSTANTS
///////////////////////////////////////////////////////////////
const VALID_EXTENSIONS = [
  "jpg",
  "jpeg",
  "png",
];

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function MapImageForm(props) {

  // Props
  const { onChange } = props;

  // State
  const [invalid, setInvalid] = useState(false);

  // Variables
  const { t, language } = useTranslation();
  const isValidFile = function(file) {
    return file &&
      file.name.match(new RegExp(`\.(${VALID_EXTENSIONS.join("|")})$`, "i"));
  };
  const getInvalidMessage = function() {
    const formatter = new Intl.ListFormat(language, { style: 'short', type: 'disjunction' });
    return t("mapImageForm.inputInvalid", { extensions: formatter.format(VALID_EXTENSIONS) });
  }

  // Events
  const onChangeFile = function(e) {
    const file = e.target && e.target.files[0];
    if (isValidFile(file)) {
      setInvalid(false);
      let img = new Image();
      img.onload = function() {
        onChange({ file, width: img.width, height: img.height });
      }
      img.src = URL.createObjectURL(file);
    } else {
      setInvalid(true);
    }
  };

  // Render
  return (
    <InputGroup hasValidation>
      <Form.Control type="file" onChange={onChangeFile} isInvalid={invalid} />
      <Form.Control.Feedback type="invalid">{getInvalidMessage()}</Form.Control.Feedback>
    </InputGroup>
  );
}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapImageForm;
