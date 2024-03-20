///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// STANDARD
import { Button } from 'react-bootstrap';
import { useTranslation } from "react-i18next";
import { toPng } from 'html-to-image';

///////////////////////////////////////////////////////////////
// COMPONENT
///////////////////////////////////////////////////////////////
function MapDownload(props) {

  // Props
  const { mapRef } = props;

  // Variables
  const { t } = useTranslation();

  // Events
  const onClick = function() {
    toPng(mapRef.current, { cacheBust: false }).then((dataUrl) => {
      const link = document.createElement("a");
      link.download = `${t("mapDownload.name")}.png`;
      link.href = dataUrl;
      link.click();
    });
  };

  // Render
  return (
    <Button variant="success" onClick={onClick}>{t("common.download")}</Button>
  );
}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapDownload;