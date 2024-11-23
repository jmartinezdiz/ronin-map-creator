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
// CONSTANTS
///////////////////////////////////////////////////////////////
const A4_RATIO = 1.41451612903;

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function MapCreatorConfigForm(props) {

  // Props
  const { config, createFromMap, onChange } = props;

  // Variables
  const { t } = useTranslation();

  // Events
  const onChangeOption = function(name, value) {
    onChange({ ...config, [name]: value });
  };

  const onClickMapWidthNotice = function(e) {
    e.preventDefault();
    if (config.mapWidth) {
      onChangeOption("mapHeight", Math.floor(config.mapWidth * A4_RATIO));
    }
  };

  const onClickMapHeightNotice = function(e) {
    e.preventDefault();
    if (config.mapHeight) {
      onChangeOption("mapWidth", Math.floor((config.mapHeight * A4_RATIO) / 2));
    }
  };


  // Render
  const renderMapWidthNotice = function() {
    return (
      <a href="#" onClick={onClickMapWidthNotice}>{t("mapCreatorConfigForm.adjustA4Height")}</a>
    );
  };

  const renderMapHeightNotice = function() {
    return (
      <a href="#" onClick={onClickMapHeightNotice}>{t("mapCreatorConfigForm.adjustA4Width")}</a>
    );
  };

  return (
    <Tabs defaultActiveKey={createFromMap ? "map" : "grid"} className="mb-3" >
      {createFromMap &&
        <Tab eventKey="map" title={t("mapCreatorConfigForm.map")}>
        <Container fluid>
          <Row>
            <MapCreatorConfigFormInput config={config} name="mapWidth" onChange={onChangeOption} notice={renderMapWidthNotice()} />
            <MapCreatorConfigFormInput config={config} name="mapHeight" onChange={onChangeOption} notice={renderMapHeightNotice()} />
            <MapCreatorConfigFormInput config={config} name="mapLayer" onChange={onChangeOption} />
          </Row>
        </Container>
      </Tab>
      }
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
            <MapCreatorConfigFormInput config={config} name="logoBorderRadius" onChange={onChangeOption} />
            <MapCreatorConfigFormInput config={config} name="logoMarginTop" onChange={onChangeOption} />
            <MapCreatorConfigFormInput config={config} name="logoMarginRight" onChange={onChangeOption} />
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
