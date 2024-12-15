///////////////////////////////////////////////////////////////
// MAIN
///////////////////////////////////////////////////////////////
let translations = {
  common: {
    download: "Descargar",
  },
  app: {
    step: "PASO {{number}}:",
    stepSelectOrigin: "Indicar si crear el mapa seleccionando una ubicación en un mapa o desde una imagen",
    stepSelectImage: "Indicar la imagen del mapa",
    stepConfigure: "Configurar la cuadrícula",
    stepDownload: "Descargar mapa",
    originTypes: {
      fromMap: "Seleccionar en mapa",
      fromImage: "Crear desde una imagen",
    },
  },
  mapImageForm: {
    inputLabel: "Seleccionar mapa",
    inputInvalid: "Debe indicarse una imagen con extensión: {{extensions}}."
  },
  mapCreatorFromMap: {
    searchLabel: "Buscar ubicación",
    searchPlaceholder: "Escribe y presiona intro",
    measureLine: "Medir distancia",
    measureArea: "Medir área",
    cleanMeasures: "Eliminar medidas",
    measureTooltipText: "Haga click para empezar a dibujar",
    measureTooltipContinueLineText: "Haga click para continuar calculando la distancia.<br>Cuando quiera finalizar haga doble click.",
    measureTooltipContinueAreaText: "Haga click para continuar calculando el área.<br>Cuando quiera finalizar haga doble click.",
  },
  mapCreatorFromMapLoadMapInfoForm: {
    buttonText: "Cargar mapa guardado",
    inputInvalid: "Debe indicarse un fichero de mapa con extensión: {{extensions}}.",
  },
  mapCreatorConfigForm: {
    map: "Mapa",
    grid: "Cuadrícula",
    lines: "Líneas",
    text: "Texto",
    logo: "Logo",
    adjustA4HorizontalHeight: "Ajustar alto a A4 en horizontal",
    adjustA4VerticalHeight: "Ajustar alto a A4 en vertical",
    adjustA4HorizontalWidth: "Ajustar ancho a A4 en hozirontal",
    adjustA4VerticalWidth: "Ajustar ancho a A4 en vertical",
  },
  mapDownload: {
    imageName: "mapa",
    infoName: "mapa",
    downloadJpgImage: "Descargar imagen jpg",
    downloadPngImage: "Descargar imagen png",
    saveInfo: "Guardar mapa",
  },
  config: {
    option: {
      gridXSize: "Número de filas",
      gridYSize: "Número de columnas",
      gridXEnumUntil: "Número de columnas con nombre",
      gridYEnumUntil: "Número de filas con nombre",
      gridLineSize: "Tamaño de líneas de cuadrícula",
      gridLineColor: "Color de cuadrícula",
      gridTextSize: "Tamaño de texto",
      gridTextFont: "Tipografía de texto",
      gridTextColor: "Color de texto",
      logoOpacity: "Opacidad del logo",
      logoBorderRadius: "Porcentage de redondez del logo",
      logoMarginTop: "Margen del logo por arriba (píxeles)",
      logoMarginRight: "Margen del logo por la derecha (píxeles)",
      mapSize: "Tamaño del mapa predefido",
      mapWidth: "Ancho del mapa (píxeles)",
      mapHeight: "Alto del mapa (píxeles)",
      mapLayer: "Tipo de mapa",
    },
    invalid: {
      gridXSize: "Debe ser un número entero mayor que cero",
      gridYSize: "Debe ser un número entero mayor que cero",
      gridXEnumUntil: "Debe ser un número entero mayor que cero",
      gridYEnumUntil: "Debe ser un número entero mayor que cero",
      gridLineSize: "Debe ser un número entero mayor que cero",
      gridLineColor: "Debe estar en el conjunto",
      gridTextSize: "Debe ser un número entero mayor que cero",
      gridTextFont: "Debe estar en el conjunto",
      gridTextColor: "Debe estar en el conjunto",
      logoOpacity: "Debe ser un número entero mayor que cero",
      logoBorderRadius: "Debe ser un número entero mayor que cero",
      logoMarginTop: "Debe ser un número entero mayor que cero",
      logoMarginRight: "Debe ser un número entero mayor que cero",
      mapWidth: "Debe ser un número entero mayor que cero",
      mapHeight: "Debe ser un número entero mayor que cero",
      mapLayer: "Debe estar en el conjunto",
    },
    availableValues: {
      gridLineColor: {
        red: "Rojo",
        green: "Verde",
        blue: "Azul",
        black: "Negro",
        white: "Blanco",
      },
      gridTextFont: {
        'armalite': 'Armalite',
        'BlackOpsOne-Regular': 'BlackOpsOne Regular',
        'CamouflageD': 'Camouflage D',
        'CamouflageW': 'Camouflage W',
        'octin-vintage-b-rg': 'Octin vintage b rg',
        'sector-017': 'Sector 017',
      },
      gridTextColor: {
        red: "Rojo",
        green: "Verde",
        blue: "Azul",
        black: "Negro",
        white: "Blanco",
      },
      mapLayer: {
        street: "Callejero",
        satellite: "Satélite",
        topographic: "Topográfico",
      },
      mapSize: {
        none: "Ninguno seleccionado",
        A4_100_horizontal: "A4 100 DPI Horizontal",
        A4_150_horizontal: "A4 150 DPI Horizontal",
        A4_200_horizontal: "A4 200 DPI Horizontal",
        A4_250_horizontal: "A4 250 DPI Horizontal",
        A4_300_horizontal: "A4 300 DPI Horizontal",
        A4_100_vertical: "A4 100 DPI Vertical",
        A4_150_vertical: "A4 150 DPI Vertical",
        A4_200_vertical: "A4 200 DPI Vertical",
        A4_250_vertical: "A4 250 DPI Vertical",
        A4_300_vertical: "A4 300 DPI Vertical",
      },
    },
  }
};

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default translations;
