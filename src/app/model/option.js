///////////////////////////////////////////////////////////////
// CONSTANTS
///////////////////////////////////////////////////////////////
const TYPES = {
  integer: "integer",
  string: "string",
};

///////////////////////////////////////////////////////////////
// CLASSS
///////////////////////////////////////////////////////////////
class Option {

  ///////////////////////////////////////////////////////////////
  // STATIC METHODS
  ///////////////////////////////////////////////////////////////
  static newInteger(attrs) {
    return new Option({ ...attrs, type: TYPES.integer });
  }

  static newString(attrs) {
    return new Option({ ...attrs, type: TYPES.string });
  }

  ///////////////////////////////////////////////////////////////
  // CONSTRUCTOR
  ///////////////////////////////////////////////////////////////
  constructor(attrs) {
    this.type = attrs.type;
    this.default = attrs.default;
    this.required = attrs.hasOwnProperty("required") ? attrs.required : true;
    this.availableValues = attrs.availableValues || [];
    this.validators = attrs.validators || [];
    this.virtual = attrs.virtual || false;
  }

  ///////////////////////////////////////////////////////////////
  // INSTANCE METHODS
  ///////////////////////////////////////////////////////////////
  getDefaultValue() {
    return this.default;
  }

  getType() {
    return this.type;
  }

  getAvailableValues() {
    return this.availableValues;
  }

  isRequired() {
    return !!this.required;
  }

  isInteger() {
    return this.type == TYPES.integer;
  }

  isVirtual() {
    return !!this.virtual;
  }

  isValid(value) {
    return this.isValidType(value) &&
      (!this.required || value !== null || values !== undefined || value !== "") &&
      (!this.availableValues.length || this.availableValues.find(function(x) { return x == value })) &&
      this.validators.reduce(function(acc, validator) { return acc && validator(value)}, true);
  }

  isValidType(value) {
    switch(this.type) {
      case TYPES.integer:
        return Number.isInteger(value);
      default:
        return true;
    }
  }

  parseValue(value) {
    switch(this.type) {
      case TYPES.integer:
        return parseInt(value);
      default:
        return value;
    }
  }

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default Option;
