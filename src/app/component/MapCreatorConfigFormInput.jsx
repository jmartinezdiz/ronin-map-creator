///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// STANTARD
import { useState, useEffect } from "react";
import {
  InputGroup,
  FloatingLabel,
  Form,
  Col,
} from 'react-bootstrap';
import { useTranslation } from "react-i18next";

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function MapCreatorConfigFormInput(props) {

  // Props
  const { config, name, onChange } = props;

  // Constants
  const { t } = useTranslation();

  // State
  const [value, setValue] = useState(config[name]);
  const [invalid, setInvalid] = useState(false);

  // Callbacks
  useEffect(() => {
    setValue(config[name]);
  }, [config[name]]);

  // Variables
  const getInvalidMessage = function() {
    return t(`config.invalid.${name}`);
  };
  const getFieldInput = function() {
    let inputProps = {
      onChange: onChangeInput,
      value: value,
      isInvalid: invalid,
      required: config.isOptionRequired(name),
    };
    let availableValues = config.getOptionAvailableValues(name);
    if (availableValues.length) {
      return <InputSelect config={config} name={name} availableValues={availableValues} inputProps={inputProps} />;
    } else if (config.isOptionInteger(name)) {
      return <InputNumber config={config} name={name} inputProps={inputProps} />;
    } else {
      throw "Unsuported input type!!!";
    }
  };

  // Events
  const onChangeInput = function(input) {
    let newValue = input.target.value;
    setValue(newValue);
    newValue = config.parseOptionValue(name, newValue);
    let isValid = config.isValidOptionValue(name, newValue);
    if (isValid) {
      setInvalid(false);
      onChange(name, newValue);
    } else {
      setInvalid(true);
    }
  };

  // Render
  return (
    <Col>
      <InputGroup hasValidation>
        <FloatingLabel controlId="floatingInput" label={t(`config.option.${name}`)} className="mb-3">
          {getFieldInput()}
          <Form.Control.Feedback type="invalid">{getInvalidMessage()}</Form.Control.Feedback>
        </FloatingLabel>
      </InputGroup>
    </Col>
  );
}

///////////////////////////////////////////////////////////////
// AUXILIAR COMPONENTS
///////////////////////////////////////////////////////////////
function InputNumber(props) {

  // Props
  const { inputProps } = props;

  // Render
  return <Form.Control type="number" { ...inputProps } />;
}

function InputSelect(props) {

  // Props
  const { config, name, availableValues, inputProps } = props;

  // Constants
  const { t } = useTranslation();
  const options = availableValues.map(function(value) {
    return <option key={value} value={value}>{t(`config.availableValues.${name}.${value}`)}</option>;
  });

  // Render
  return (
    <Form.Select {...inputProps}>
      {!inputProps.required && <option></option>}
      {options}
    </Form.Select>
  );
}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapCreatorConfigFormInput;
