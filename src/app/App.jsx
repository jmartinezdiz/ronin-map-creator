///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// STANDARD
import { useState } from 'react';
import { useTranslation } from "react-i18next";

// COMPONENTS
import Block from './component/Block';
import MapImageForm from './component/MapImageForm';
import MapCreator from './component/MapCreator';
import MapDownload from './component/MapDownload';

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function App() {

  // State
  const [mapImage, setMapImage] = useState(null);
  const [mapToDownloadRef, setMapToDownloadRef] = useState(null);

  // Variables
  const { t } = useTranslation();

  // Events
  const onChangeMapFile = function(image = { file, width, height }) {
    setMapImage(image);
  };
  const onLoadMapCreator = function({ mapRef: mapRef }) {
    setMapToDownloadRef(mapRef);
  };

  // Render
  return (
    <>
      <Block title={t('app.step1')} subtitle={t('app.step1Text')}>
        <MapImageForm onChange={onChangeMapFile} />
      </Block>
      {mapImage &&
        <Block title={t('app.step2')} subtitle={t('app.step2Text')}>
          <MapCreator onLoad={onLoadMapCreator} mapImage={mapImage} />
        </Block>
      }
      {mapToDownloadRef &&
        <Block title={t('app.step3')} subtitle={t('app.step3Text')}>
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
