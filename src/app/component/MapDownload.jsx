///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// STANDARD
import { Button, ButtonGroup } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { toPng, toJpeg } from 'html-to-image';

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function MapDownload(props) {

  // Props
  const { mapToDownload } = props;
  const { mapRef, getMapInfo } = mapToDownload;

  // Variables
  const { t } = useTranslation();
  const downloadFile = function({ name, url }) {
    const link = document.createElement("a");
    link.download = name;
    link.href = url;
    link.click();
    link.remove();
  };

  // Events
  const onClickDownloadJpgImage = function() {
    toJpeg(mapRef.current, { cacheBust: false, quality: 0.90 }).then((url) => {
      downloadFile({ name: `${t("mapDownload.imageName")}.jpg`, url });
    });
  };

  const onClickDownloadPngImage = function() {
    toPng(mapRef.current, { cacheBust: false }).then((url) => {
      downloadFile({ name: `${t("mapDownload.imageName")}.png`, url });
    });
  };

  const onClickDownloadInfo = function() {
    downloadFile({
      name: `${t("mapDownload.infoName")}.json`,
      url: "data:text/json;charset=utf-8," + encodeURIComponent(getMapInfo().toJSON()),
    });
  };

  // Render
  return (
    <ButtonGroup>
      <Button variant="success" onClick={onClickDownloadJpgImage}>{t("mapDownload.downloadJpgImage")}</Button>
      <Button variant="success" onClick={onClickDownloadPngImage}>{t("mapDownload.downloadPngImage")}</Button>
      {getMapInfo &&
        <Button variant="primary" onClick={onClickDownloadInfo}>{t("mapDownload.saveInfo")}</Button>
      }
    </ButtonGroup>
  );
}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapDownload;