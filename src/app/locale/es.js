///////////////////////////////////////////////////////////////
// MAIN
///////////////////////////////////////////////////////////////
let translations = {
  common: {
    download: "Descargar",
  },
  app: {
    step1: "PASO 1:",
    step1Text: "Indicar la imagen del mapa",
    step2: "PASO 2:",
    step2Text: "Configurar la cuadrícula",
    step3: "PASO 3:",
    step3Text: "Descargar mapa",
  },
  mapImageForm: {
    inputLabel: "Seleccionar mapa",
    inputInvalid: "Debe indicarse una imagen con extensión: {{extensions}}."
  },
  mapCreatorConfigForm: {
    grid: "Cuadrícula",
    lines: "Líneas",
    text: "Texto",
    logo: "Logo",
  },
  mapDownload: {
    name: "mapa",
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
    },
  }
};

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default translations;
