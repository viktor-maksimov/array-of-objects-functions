(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define([], factory);
  } else if (typeof exports !== "undefined") {
    factory();
  } else {
    var mod = {
      exports: {}
    };
    factory();
    global.arrayOfObjects = mod.exports;
  }
})(this, function () {
  "use strict";

  (function (global, factory) {
    if (typeof define === "function" && define.amd) {
      define(["exports"], factory);
    } else if (typeof exports !== "undefined") {
      factory(exports);
    } else {
      var mod = {
        exports: {}
      };
      factory(mod.exports);
      global.arrayOfObjects = mod.exports;
    }
  })(void 0, function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
      value: true
    });
    _exports.getUniqueValues = getUniqueValues;

    function getUniqueValues(arrayOfObjects, propertyName) {
      const output = [];
      arrayOfObjects.map(obj => {
        if (obj[propertyName] !== undefined) {
          if (output.find(val => obj[propertyName] === val) === undefined) {
            output.push(obj[propertyName]);
          }
        }
      });
      return output;
    }
  });
});