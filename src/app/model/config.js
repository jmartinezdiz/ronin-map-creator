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
const AVAILABLE_LAYERS = ["satellite", "street"];

const greaterThanZero = function(value) {
  return value && value > 0;
};

const OPTIONS = {
  gridXSize: Option.newInteger({ default: 10, validators: [greaterThanZero] }),
  gridYSize: Option.newInteger({ default: 18, validators: [greaterThanZero] }),
  gridXEnumUntil: Option.newInteger({ default: 14, validators: [greaterThanZero] }),
  gridYEnumUntil: Option.newInteger({ default: 9, validators: [greaterThanZero] }),
  gridLineColor: Option.newString({ default: "white", availableValues: AVAILABLE_COLORS }),
  gridLineSize: Option.newInteger({ default: 1, validators: [greaterThanZero] }),
  gridTextSize: Option.newInteger({ default: 40, validators: [greaterThanZero] }),
  gridTextFont: Option.newString({ default: "BlackOpsOne-Regular", availableValues: AVAILABLE_FONTS }),
  gridTextColor: Option.newString({ default: "white", availableValues: AVAILABLE_COLORS }),
  logoOpacity: Option.newInteger({ default: 90, validators: [greaterThanZero] }),
  logoBorderRadius: Option.newInteger({ default: 50, validators: [greaterThanZero] }),
  mapWidth: Option.newInteger({ default: 1280, validators: [greaterThanZero] }),
  mapHeight: Option.newInteger({ default: 720, validators: [greaterThanZero] }),
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

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default Config;
export { OPTIONS };
