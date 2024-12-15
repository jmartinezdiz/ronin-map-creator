///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// STANTARD
import React, { useEffect } from 'react';
import {
  Tabs,
  Tab,
  Container,
  Row,
} from 'react-bootstrap';
import { useTranslation } from "react-i18next";

// MODELS
import { OPTIONS, AVAILABLE_MAP_SIZES } from '../model/config';

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

  const getMapSize = function(width, height) {
    for (const [key, value] of Object.entries(AVAILABLE_MAP_SIZES)) {
      if (value.width == width && value.height == height) {
        return key;
      }
    }
    return OPTIONS.mapSize.default;
  };

  // Callbacks
  useEffect(() => {
    let mapSize = getMapSize(config.mapWidth, config.mapHeight);
    if (config.mapSize != mapSize) {
      onChangeOption("mapSize", mapSize);
    }
  }, [config.mapWidth, config.mapHeight]);

  // Events
  const onChangeOptions = function(newOptions) {
    onChange({ ...config, ...newOptions });
  };

  const onChangeOption = function(name, value) {
    onChangeOptions({ [name]: value });
  };

  const onChangeMapSize = function(name, value) {
    let { width, height } = AVAILABLE_MAP_SIZES[value];
    onChangeOptions({
      [name]: value,
      mapWidth: width || config.mapWidth,
      mapHeight: height || config.mapHeight,
    });
  };

  const onClickMapWidthA4HorizontalNotice = function(e) {
    e.preventDefault();
    if (config.mapWidth) {
      onChangeOption("mapHeight", Math.floor((config.mapWidth * A4_RATIO) / 2));
    }
  };

  const onClickMapWidthA4VerticalNotice = function(e) {
    e.preventDefault();
    if (config.mapWidth) {
      onChangeOption("mapHeight", Math.floor(config.mapWidth * A4_RATIO));
    }
  };

  const onClickMapHeightA4HorizontalNotice = function(e) {
    e.preventDefault();
    if (config.mapHeight) {
      onChangeOption("mapWidth", Math.floor(config.mapHeight * A4_RATIO));
    }
  };

  const onClickMapHeightA4VerticalNotice = function(e) {
    e.preventDefault();
    if (config.mapHeight) {
      onChangeOption("mapWidth", Math.floor((config.mapHeight * A4_RATIO) / 2));
    }
  };

  // Render
  const renderMapWidthNotice = function() {
    return (
      <React.Fragment>
        <a href="#" onClick={onClickMapWidthA4HorizontalNotice}>{t("mapCreatorConfigForm.adjustA4HorizontalHeight")}</a>
        &nbsp;/&nbsp;
        <a href="#" onClick={onClickMapWidthA4VerticalNotice}>{t("mapCreatorConfigForm.adjustA4VerticalHeight")}</a>
      </React.Fragment>
    );
  };

  const renderMapHeightNotice = function() {
    return (
      <React.Fragment>
        <a href="#" onClick={onClickMapHeightA4HorizontalNotice}>{t("mapCreatorConfigForm.adjustA4HorizontalWidth")}</a>
        &nbsp;/&nbsp;
        <a href="#" onClick={onClickMapHeightA4VerticalNotice}>{t("mapCreatorConfigForm.adjustA4VerticalWidth")}</a>
      </React.Fragment>
    );
  };

  return (
    <Tabs defaultActiveKey={createFromMap ? "map" : "grid"} className="mb-3" >
      {createFromMap &&
        <Tab eventKey="map" title={t("mapCreatorConfigForm.map")}>
        <Container fluid>
          <Row>
            <MapCreatorConfigFormInput config={config} name="mapSize" onChange={onChangeMapSize} />
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
