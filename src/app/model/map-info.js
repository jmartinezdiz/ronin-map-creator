///////////////////////////////////////////////////////////////
// IMPORTS
///////////////////////////////////////////////////////////////

// MODELS
import Config from "./config";
import MapInfoFromMap from "./map-info-from-map";

///////////////////////////////////////////////////////////////
// CLASSS
///////////////////////////////////////////////////////////////
class MapInfo {

  ///////////////////////////////////////////////////////////////
  // CLASS METHODS
  ///////////////////////////////////////////////////////////////
  static fromHash(hash) {
    return new MapInfo({
      config: new Config(hash?.config || {}),
      mapInfoFromMap: hash.mapInfoFromMap ? new MapInfoFromMap(hash.mapInfoFromMap) : null,
    });
  }

  ///////////////////////////////////////////////////////////////
  // CONSTRUCTOR
  ///////////////////////////////////////////////////////////////
  constructor({ config, mapInfoFromMap }) {
    this.config = config;
    this.mapInfoFromMap = mapInfoFromMap;
  }

  ///////////////////////////////////////////////////////////////
  // INSTANCE METHODS
  ///////////////////////////////////////////////////////////////
  toJSON() {
    let element = {
      version: "1",
      config: this.config.toHash(),
      mapInfoFromMap: this.mapInfoFromMap,
    };
    return JSON.stringify(element);
  }

}

///////////////////////////////////////////////////////////////
// EXPORTS
///////////////////////////////////////////////////////////////
export default MapInfo;
