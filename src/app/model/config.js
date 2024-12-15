///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////
import Option from './option';

///////////////////////////////////////////////////////////////
// CONSTANTS
///////////////////////////////////////////////////////////////
const AVAILABLE_COLORS = ["red", "green", "blue", "black", "white"];
const AVAILABLE_FONTS = [
  'armalite',
  'BlackOpsOne-Regular',
  'CamouflageD',
  'CamouflageW',
  'octin-vintage-b-rg',
  'sector-017',
];
const AVAILABLE_LAYERS = ["satellite", "street", "topographic"];

const AVAILABLE_MAP_SIZES = {
  none: { width: null, height: null },
  A4_100_horizontal: { width: 1169, height: 827 },
  A4_150_horizontal: { width: 1754, height: 1240 },
  A4_200_horizontal: { width: 2339, height: 1653 },
  A4_250_horizontal: { width: 2923, height: 2067 },
  A4_300_horizontal: { width: 3508, height: 2480 },
  A4_100_vertical: { width: 827, height: 1169 },
  A4_150_vertical: { width: 1240, height: 1754 },
  A4_200_vertical: { width: 1653, height: 2339 },
  A4_250_vertical: { width: 2067, height: 2923 },
  A4_300_vertical: { width: 2480, height: 3508 },
};

const greaterThanZero = function(value) {
  return value && value > 0;
};

const OPTIONS = {
  gridXSize: Option.newInteger({ default: 20, validators: [greaterThanZero] }),
  gridYSize: Option.newInteger({ default: 20, validators: [greaterThanZero] }),
  gridXEnumUntil: Option.newInteger({ default: 20, validators: [greaterThanZero] }),
  gridYEnumUntil: Option.newInteger({ default: 20, validators: [greaterThanZero] }),
  gridLineColor: Option.newString({ default: "white", availableValues: AVAILABLE_COLORS }),
  gridLineSize: Option.newInteger({ default: 1, validators: [greaterThanZero] }),
  gridTextSize: Option.newInteger({ default: 40, validators: [greaterThanZero] }),
  gridTextFont: Option.newString({ default: "BlackOpsOne-Regular", availableValues: AVAILABLE_FONTS }),
  gridTextColor: Option.newString({ default: "white", availableValues: AVAILABLE_COLORS }),
  logoOpacity: Option.newInteger({ default: 90, validators: [greaterThanZero] }),
  logoBorderRadius: Option.newInteger({ default: 50, validators: [greaterThanZero] }),
  logoMarginTop: Option.newInteger({ default: 80, validators: [greaterThanZero] }),
  logoMarginRight: Option.newInteger({ default: 40, validators: [greaterThanZero] }),
  mapSize: Option.newString({ default: "none", availableValues: Object.keys(AVAILABLE_MAP_SIZES), virtual: true }),
  mapWidth: Option.newInteger({ default: 1280, validators: [greaterThanZero] }),
  mapHeight: Option.newInteger({ default: 905, validators: [greaterThanZero] }),
  mapLayer: Option.newString({ default: "satellite", availableValues: AVAILABLE_LAYERS }),
};

///////////////////////////////////////////////////////////////
// CLASSS
///////////////////////////////////////////////////////////////
class Config {

  ///////////////////////////////////////////////////////////////
  // CONSTRUCTOR
  ///////////////////////////////////////////////////////////////
  constructor(options = {}) {
    Object.keys(OPTIONS).forEach((x) => {
      this[x] = options.hasOwnProperty(x) ? options[x] : OPTIONS[x].getDefaultValue();
    });
  }

  ///////////////////////////////////////////////////////////////
  // INSTANCE METHODS
  ///////////////////////////////////////////////////////////////
  isOptionRequired(name) {
    return OPTIONS[name].isRequired();
  }

  isValidOptionValue(name, value) {
    return OPTIONS[name].isValid(value);
  }

  isOptionInteger(name) {
    return OPTIONS[name].isInteger();
  }

  getOptionAvailableValues(name) {
    return OPTIONS[name].getAvailableValues();
  }

  parseOptionValue(name, value) {
    return OPTIONS[name].parseValue(value);
  }

  toHash() {
    let hash = {};
    Object.keys(OPTIONS).forEach((x) => {
      if (OPTIONS[x] && !OPTIONS[x].isVirtual()) {
        hash[x] = this[x];
      }
    });
    return hash;
  }

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default Config;
export { OPTIONS, AVAILABLE_MAP_SIZES };
