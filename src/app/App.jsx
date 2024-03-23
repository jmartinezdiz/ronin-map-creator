///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// STANDARD
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { ButtonGroup, Button } from "react-bootstrap";

// COMPONENTS
import Block from './component/Block';
import MapImageForm from './component/MapImageForm';
import MapCreator from './component/MapCreator';
import MapDownload from './component/MapDownload';

// LIB
import succ from './lib/succ';

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function App() {

  // Constants
  const { t } = useTranslation();
  const originTypes = { fromMap: 'fromMap', fromImage: 'fromImage' };

  // State
  const [originType, setOriginType] = useState(originTypes.fromMap);
  const [mapImage, setMapImage] = useState(null);
  const [mapToDownloadRef, setMapToDownloadRef] = useState(null);

  // Variables
  let number = "0";

  // Events
  const onClickOriginTypeFromMap = function() {
    setOriginType(originTypes.fromMap);
  };
  const onClickOriginTypeFromImage = function() {
    setOriginType(originTypes.fromImage);
  };
  const onChangeMapFile = function(image = { file, width, height }) {
    setMapImage(image);
  };
  const onLoadMapCreator = function({ mapRef: mapRef }) {
    setMapToDownloadRef(mapRef);
  };

  // Render
  return (
    <>
      <Block title={t('app.step', { number: number = succ(number) })} subtitle={t('app.stepSelectOrigin')}>
        <ButtonGroup>
          <Button variant={originType == originTypes.fromMap ? "primary" : "secondary"} onClick={onClickOriginTypeFromMap}>
            {t("app.originTypes.fromMap")}
          </Button>
          <Button variant={originType == originTypes.fromImage ? "primary" : "secondary"} onClick={onClickOriginTypeFromImage}>
            {t("app.originTypes.fromImage")}
          </Button>
        </ButtonGroup>
      </Block>
      {originType == originTypes.fromImage &&
        <Block title={t('app.step', { number: number = succ(number) })} subtitle={t('app.stepConfigure')}>
          <MapImageForm onChange={onChangeMapFile} />
        </Block>
      }
      {((originType == originTypes.fromImage && mapImage) || originType == originTypes.fromMap) &&
        <Block title={t('app.step', { number: number = succ(number) })} subtitle={t('app.stepConfigure')}>
          <MapCreator
            onLoad={onLoadMapCreator}
            mapImage={mapImage}
            createFromMap={originType == originTypes.fromMap}
            createFromImage={originType == originTypes.fromImage}
          />
        </Block>
      }
      {mapToDownloadRef &&
        <Block title={t('app.step', { number: number = succ(number) })} subtitle={t('app.stepDownload')}>
          <MapDownload mapRef={mapToDownloadRef} />
        </Block>
      }
    </>
  );

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default App;
