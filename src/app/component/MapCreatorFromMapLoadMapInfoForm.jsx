///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// STANDARD
import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import { InputGroup, Form, Button } from 'react-bootstrap';

// MODELS
import MapInfo from "../model/map-info";

///////////////////////////////////////////////////////////////
// CONSTANTS
///////////////////////////////////////////////////////////////
const VALID_EXTENSIONS = ["json"];

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function MapCreatorFromMapLoadMapInfoForm(props) {

  // Props
  const { onChange } = props;

  // References
  const fileInputRef = useRef(null);

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
    return t("mapCreatorFromMapLoadMapInfoForm.inputInvalid", { extensions: formatter.format(VALID_EXTENSIONS) });
  }

  // Events
  const onChangeFile = function(e) {
    const file = e.target && e.target.files[0];
    if (!file) {
      setInvalid(false);
    } else if (isValidFile(file)) {
      new Promise((resolve, reject) => {
        const fileReader = new FileReader();
        fileReader.onload = function(event) {
          resolve(JSON.parse(event.target.result))
        };
        fileReader.onerror = function(error) {
          reject(error);
        };
        fileReader.readAsText(file);
      }).then(function(element) {
        setInvalid(false);
        onChange(MapInfo.fromHash(element));
      }).catch(function(error) {
        setInvalid(true);
      });
    } else {
      setInvalid(true);
    }
  };

  const onClickButton = function() {
    fileInputRef.current?.click();
  };

  // Render
  return (
    <div className="map-creator-from-map-load-map-info-form">
      <InputGroup hasValidation>
        <Button onClick={onClickButton} variant="outline-primary">
          {t("mapCreatorFromMapLoadMapInfoForm.buttonText")}
        </Button>
        <Form.Control className="d-none" ref={fileInputRef} type="file" onChange={onChangeFile} isInvalid={invalid} />
        <Form.Control.Feedback type="invalid">{getInvalidMessage()}</Form.Control.Feedback>
      </InputGroup>
    </div>
  );

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapCreatorFromMapLoadMapInfoForm;
