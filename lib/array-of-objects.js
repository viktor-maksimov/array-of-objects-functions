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
})(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : this, function () {
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
  })(typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : void 0, function (_exports) {
    "use strict";

    Object.defineProperty(_exports, "__esModule", {
      value: true
    });
    _exports.findAllMatching = findAllMatching;
    _exports.findFirstOneMatching = findFirstOneMatching;
    _exports.findLastOneMatching = findLastOneMatching;
    _exports.getUniqueValues = getUniqueValues;
    _exports.removeAllMatching = removeAllMatching;
    _exports.removeFirstOneMatching = removeFirstOneMatching;
    _exports.removeLastOneMatching = removeLastOneMatching;

    function getUniqueValues(arrayOfObjects, propertyName) {
      const output = [];
      arrayOfObjects.map(obj => {
        if (obj[propertyName] !== undefined) {
          if (output.find(val => JSON.stringify(obj[propertyName]) === JSON.stringify(val)) === undefined) {
            output.push(obj[propertyName]);
          }
        }
      });
      return output;
    }

    function findFirstOneMatching(arrayOfObjects, propertyName, propertyValue) {
      let output = null;
      arrayOfObjects.some(obj => {
        if (obj[propertyName] !== undefined) {
          if (JSON.stringify(obj[propertyName]) === JSON.stringify(propertyValue)) {
            output = obj;
            return true;
          }
        }

        return false;
      });
      return output;
    }

    function findLastOneMatching(arrayOfObjects, propertyName, propertyValue) {
      let output = null;
      arrayOfObjects.map(obj => {
        if (obj[propertyName] !== undefined) {
          if (JSON.stringify(obj[propertyName]) === JSON.stringify(propertyValue)) {
            output = obj;
          }
        }
      });
      return output;
    }

    function findAllMatching(arrayOfObjects, propertyName, propertyValue) {
      const output = [];
      arrayOfObjects.map(obj => {
        if (obj[propertyName] !== undefined) {
          if (JSON.stringify(obj[propertyName]) === JSON.stringify(propertyValue)) {
            output.push(obj);
          }
        }
      });
      return output;
    }

    function removeFirstOneMatching(arrayOfObjects, propertyName, propertyValue) {
      let flag = false;
      return arrayOfObjects.filter(obj => {
        if (obj[propertyName] !== undefined && !flag) {
          if (JSON.stringify(obj[propertyName]) === JSON.stringify(propertyValue)) {
            flag = true;
            return false;
          }
        }

        return true;
      });
    }

    function removeLastOneMatching(arrayOfObjects, propertyName, propertyValue) {
      let lastOneMatchingIndex = -1;
      arrayOfObjects.map((obj, index) => {
        if (obj[propertyName] !== undefined) {
          if (JSON.stringify(obj[propertyName]) === JSON.stringify(propertyValue)) {
            lastOneMatchingIndex = index;
          }
        }
      });
      const output = JSON.parse(JSON.stringify(arrayOfObjects));

      if (lastOneMatchingIndex != -1) {
        output.splice(lastOneMatchingIndex, 1);
      }

      return output;
    }

    function removeAllMatching(arrayOfObjects, propertyName, propertyValue) {
      return arrayOfObjects.filter(obj => {
        if (obj[propertyName] !== undefined) {
          if (JSON.stringify(obj[propertyName]) === JSON.stringify(propertyValue)) {
            return false;
          }
        }

        return true;
      });
    }
  });
});