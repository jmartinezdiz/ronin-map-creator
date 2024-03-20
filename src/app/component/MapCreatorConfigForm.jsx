///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// STANTARD
import {
  Tabs,
  Tab,
  Container,
  Row,
} from 'react-bootstrap';
import { useTranslation } from "react-i18next";

// COMPONENTS
import MapCreatorConfigFormInput from "./MapCreatorConfigFormInput";

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function MapCreatorConfigForm(props) {

  // Props
  const { config, onChange } = props;

  // Variables
  const { t } = useTranslation();

  // Events
  const onChangeOption = function(name, value) {
    onChange({ ...config, [name]: value });
  };

  // Render
  return (
    <Tabs defaultActiveKey="grid" className="mb-3" >
      <Tab eventKey="grid" title={t("mapCreatorConfigForm.grid")}>
        <Container fluid>
          <Row>
            <MapCreatorConfigFormInput config={config} name="gridXSize" onChange={onChangeOption} />
            <MapCreatorConfigFormInput config={config} name="gridYSize" onChange={onChangeOption} />
            <MapCreatorConfigFormInput config={config} name="gridYEnumUntil" onChange={onChangeOption} />
            <MapCreatorConfigFormInput config={config} name="gridXEnumUntil" onChange={onChangeOption} />
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="lines" title={t("mapCreatorConfigForm.lines")}>
        <Container fluid>
          <Row>
            <MapCreatorConfigFormInput config={config} name="gridLineSize" onChange={onChangeOption} />
            <MapCreatorConfigFormInput config={config} name="gridLineColor" onChange={onChangeOption} />
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="text" title={t("mapCreatorConfigForm.text")}>
        <Container fluid>
          <Row>
            <MapCreatorConfigFormInput config={config} name="gridTextSize" onChange={onChangeOption} />
            <MapCreatorConfigFormInput config={config} name="gridTextFont" onChange={onChangeOption} />
            <MapCreatorConfigFormInput config={config} name="gridTextColor" onChange={onChangeOption} />
          </Row>
        </Container>
      </Tab>
      <Tab eventKey="logo" title={t("mapCreatorConfigForm.logo")}>
        <Container fluid>
          <Row>
            <MapCreatorConfigFormInput config={config} name="logoOpacity" onChange={onChangeOption} />
          </Row>
        </Container>
      </Tab>
    </Tabs>
  );

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapCreatorConfigForm;