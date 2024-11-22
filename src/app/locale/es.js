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
  },
  mapDownload: {
    imageName: "mapa",
    infoName: "mapa",
    downloadImage: "Descargar imagen",
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
    },
  }
};

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default translations;
