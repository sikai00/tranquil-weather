/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  background-color: grey;\n}\n\nbody > * {\n  margin-bottom: 10px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,mBAAmB;AACrB","sourcesContent":["body {\n  background-color: grey;\n}\n\nbody > * {\n  margin-bottom: 10px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/api/api.js":
/*!************************!*\
  !*** ./src/api/api.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getWeatherPromise)
/* harmony export */ });
/**
 * This module is responsible for fetching weather information from OpenWeather.
 */

/**
 * Fetches weather information from OpenWeather asynchronously.
 * @param {string} API_KEY - API key from OpenWeather.
 * @param {string} location - Location for the weather information as requested.
 * @returns {Promise} Promise of a JSON from OpenWeather.
 */
async function getWeatherPromise (API_KEY, location) {
  // Issues: No defense against unresolved, rejected requests.
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
  const response = await fetch(url)
  const responseJson = await response.json()
  return responseJson
}


/***/ }),

/***/ "./src/api/parser.js":
/*!***************************!*\
  !*** ./src/api/parser.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCloudiness": () => (/* binding */ getCloudiness),
/* harmony export */   "getHumidity": () => (/* binding */ getHumidity),
/* harmony export */   "getLocationName": () => (/* binding */ getLocationName),
/* harmony export */   "getPressure": () => (/* binding */ getPressure),
/* harmony export */   "getTemperature": () => (/* binding */ getTemperature),
/* harmony export */   "getTime": () => (/* binding */ getTime),
/* harmony export */   "getWeather": () => (/* binding */ getWeather),
/* harmony export */   "getWind": () => (/* binding */ getWind)
/* harmony export */ });
/**
 * This module is responsible for parsing the JSON object from OpenWeather and
 * has several functions for returning different weather information e.g., wind,
 * rainfall, etc.
 * Information are returned in the form of an Object.
 */


/**
 * Returns current weather information as an Object containing 'main',
 * 'description', and 'id', where 'main' is the key for the overview of the
 * current weather, 'description' is the key for additional information of the
 * current weather, 'id' is the key for identifier of the current weather as
 * classified by OpenWeather.
 * @param {JSON} weatherJson - JSON from OpenWeather.
 * @returns {Object} an Object with current weather information.
 */
function getWeather (weatherJson) {
  const weather = weatherJson.weather[0] // First result takes precedence
  const main = weather.main
  const description = weather.description
  const id = weather.id
  return {
    main,
    description,
    id
  }
}

/**
 * Returns current temperature information as an Object containing 'temp' and
 * 'feelsLike', where 'temp' is the key for the current temperature,
 * and 'feelsLike' is the key for the temperature it feels like.
 * @param {JSON} weatherJson - JSON from OpenWeather.
 * @returns {Object} an Object with current temperature information.
 */
function getTemperature (weatherJson) {
  const main = weatherJson.main
  const temp = main.temp
  const feelsLike = main.feels_like
  return {
    temp,
    feelsLike
  }
}

/**
 * Returns current humidity information as an Object containing 'humidity',
 * where 'humidity' is the key for the current humidity.
 * @param {JSON} weatherJson - JSON from OpenWeather.
 * @returns {Object} an Object with current humidity information.
 */
function getHumidity (weatherJson) {
  const main = weatherJson.main
  const humidity = main.humidity
  return {
    humidity
  }
}

/**
 * Returns current pressure information as an Object containing 'pressure',
 * where 'pressure' is the key for the current pressure.
 * @param {JSON} weatherJson - JSON from OpenWeather.
 * @returns {Object} an Object with current pressure information.
 */
function getPressure (weatherJson) {
  const main = weatherJson.main
  const pressure = main.pressure
  return {
    pressure
  }
}

/**
 * Returns current wind information as an Object containing 'speed' and 'deg',
 * where 'speed' is the key for the current wind speed, and 'deg' is the key
 * for the current wind direction in degrees.
 * @param {JSON} weatherJson - JSON from OpenWeather.
 * @returns {Object} an Object with current wind information.
 */
function getWind (weatherJson) {
  const wind = weatherJson.wind
  const speed = wind.speed
  const deg = wind.deg
  return {
    speed,
    deg
  }
}

/**
 * Returns current cloudiness information as an Object containing 'cloudiness',
 * where 'cloudiness' is the key for the current cloudiness.
 * @param {JSON} weatherJson - JSON from OpenWeather.
 * @returns {Object} an Object with current cloudiness information.
 */
function getCloudiness (weatherJson) {
  const cloud = weatherJson.clouds
  const cloudiness = cloud.all
  return {
    cloudiness
  }
}

/**
 * Returns the relevant time information of the location queried as an Object
 * containing 'sunrise', 'sunset', 'timezone', 'dt', where 'sunrise' and
 * 'sunset' is the respective key for sunrise/sunset time in Unix time, 'dt' is
 * the time of the calculation in Unix time and 'timezone' is the difference
 * from UTC in seconds.
 * @param {JSON} weatherJson - JSON from OpenWeather.
 * @returns {Object} an Object with sunrise/sunset time.
 */
function getTime (weatherJson) {
  const sys = weatherJson.sys
  const sunrise = sys.sunrise
  const sunset = sys.sunset
  const dt = weatherJson.dt

  const timezone = weatherJson.timezone
  return {
    sunrise,
    sunset,
    dt,
    timezone
  }
}

/**
 * Return the name of the location as formatted by OpenWeather as an Object
 * containing 'name', where 'name' is the name of the location.
 * @param {JSON} weatherJson
 * @returns {Object} an Object with the name of the location queried.
 */
function getLocationName (weatherJson) {
  const name = weatherJson.name
  return {
    name
  }
}
// TODO: Rain, snow, visibility


/***/ }),

/***/ "./src/components/cloudiness.js":
/*!**************************************!*\
  !*** ./src/components/cloudiness.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawCloudinessNode)
/* harmony export */ });
/**
 * This component draws a div for the cloudiness information.
 */
function drawCloudinessNode (cloudinessObj) {
  const cloudinessContainer = document.createElement('div')
  cloudinessContainer.classList.add('cloudiness-container')

  const cloudiness = document.createElement('div')
  cloudiness.classList.add('cloudiness')
  cloudiness.textContent = cloudinessObj.cloudiness

  cloudinessContainer.appendChild(cloudiness)

  return cloudinessContainer
}


/***/ }),

/***/ "./src/components/humidity.js":
/*!************************************!*\
  !*** ./src/components/humidity.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawHumidityNode)
/* harmony export */ });
/**
 * This component draws a div for the humidity information.
 */
function drawHumidityNode (humidityObj) {
  const humidityContainer = document.createElement('div')
  humidityContainer.classList.add('humidity-container')

  const humidity = document.createElement('div')
  humidity.classList.add('humidity')
  humidity.textContent = humidityObj.humidity

  humidityContainer.appendChild(humidity)

  return humidityContainer
}


/***/ }),

/***/ "./src/components/pressure.js":
/*!************************************!*\
  !*** ./src/components/pressure.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawPressureNode)
/* harmony export */ });
/**
 * This component draws a div for the pressure information.
 */
function drawPressureNode (pressureObj) {
  const pressureContainer = document.createElement('div')
  pressureContainer.classList.add('pressure-container')

  const pressure = document.createElement('div')
  pressure.classList.add('pressure')
  pressure.textContent = pressureObj.pressure

  pressureContainer.appendChild(pressure)

  return pressureContainer
}


/***/ }),

/***/ "./src/components/temperature.js":
/*!***************************************!*\
  !*** ./src/components/temperature.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawTemperatureNode)
/* harmony export */ });
/**
 * This component draws a div for temperature information and
 * feels-like temperature.
 */
function drawTemperatureNode (temperatureObj) {
  const temperatureContainer = document.createElement('div')
  temperatureContainer.classList.add('temperature-container')

  const temp = document.createElement('div')
  temp.classList.add('temp')
  temp.textContent = temperatureObj.temp

  const feelsLike = document.createElement('div')
  feelsLike.classList.add('feelsLike')
  feelsLike.textContent = temperatureObj.feelsLike

  temperatureContainer.appendChild(temp)
  temperatureContainer.appendChild(feelsLike)

  return temperatureContainer
}


/***/ }),

/***/ "./src/components/weather.js":
/*!***********************************!*\
  !*** ./src/components/weather.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawWeatherNode)
/* harmony export */ });
/* harmony import */ var _static_weather_lightning_rainy_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../static/weather-lightning-rainy.png */ "./src/static/weather-lightning-rainy.png");
/* harmony import */ var _static_weather_rainy_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../static/weather-rainy.png */ "./src/static/weather-rainy.png");
/* harmony import */ var _static_weather_snowy_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../static/weather-snowy.png */ "./src/static/weather-snowy.png");
/* harmony import */ var _static_weather_fog_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../static/weather-fog.png */ "./src/static/weather-fog.png");
/* harmony import */ var _static_weather_sunny_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../static/weather-sunny.png */ "./src/static/weather-sunny.png");
/* harmony import */ var _static_weather_night_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../static/weather-night.png */ "./src/static/weather-night.png");
/* harmony import */ var _static_weather_cloudy_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../static/weather-cloudy.png */ "./src/static/weather-cloudy.png");
/**
 * This component draws a div for the main weather information and its
 * description.
 */








function drawWeatherNode (weatherObj, timeObj) {
  const weatherContainer = document.createElement('div')
  weatherContainer.classList.add('weather-container')

  const icon = new Image()
  icon.src = selectWeatherIcon(weatherObj.id, timeObj)

  const main = document.createElement('div')
  main.classList.add('main')
  main.textContent = weatherObj.main

  const description = document.createElement('div')
  description.classList.add('description')
  description.textContent = weatherObj.description

  weatherContainer.appendChild(icon)
  weatherContainer.appendChild(main)
  weatherContainer.appendChild(description)

  return weatherContainer
}

/**
 * Returns an icon representative of the current weather through an ID from the
 * OpenWeather JSON.
 * @param {Number} id - ID from OpenWeather's JSON
 * @param {Object} sunObj - Object returned from parser.getSunriseSunset
 * @returns {String} an URL to the icon.
 */
function selectWeatherIcon (id, timeObj) {
  if (id >= 200 && id <= 299) {
    // Thunderstorm
    return _static_weather_lightning_rainy_png__WEBPACK_IMPORTED_MODULE_0__
  } else if (id >= 300 && id <= 399) {
    // Drizzle
    return _static_weather_rainy_png__WEBPACK_IMPORTED_MODULE_1__
  } else if (id >= 500 && id <= 599) {
    // Rain
    return _static_weather_rainy_png__WEBPACK_IMPORTED_MODULE_1__
  } else if (id >= 600 && id <= 699) {
    // Snow
    return _static_weather_snowy_png__WEBPACK_IMPORTED_MODULE_2__
  } else if (id >= 700 && id <= 799) {
    // Atmosphere
    return _static_weather_fog_png__WEBPACK_IMPORTED_MODULE_3__
  } else if (id === 800) {
    // Clear
    const localizedTimeNow = timeObj.dt + timeObj.timezone
    if (localizedTimeNow > timeObj.sunset) {
      return _static_weather_sunny_png__WEBPACK_IMPORTED_MODULE_4__
    } else if (localizedTimeNow > timeObj.sunrise) {
      return _static_weather_night_png__WEBPACK_IMPORTED_MODULE_5__
    } else {
      return _static_weather_sunny_png__WEBPACK_IMPORTED_MODULE_4__
    }
  } else if (id >= 801 && id <= 809) {
    // Clouds
    return _static_weather_cloudy_png__WEBPACK_IMPORTED_MODULE_6__
  }
}


/***/ }),

/***/ "./src/components/wind.js":
/*!********************************!*\
  !*** ./src/components/wind.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ drawWindNode)
/* harmony export */ });
/**
 * This component draws a div for the wind speed and degree information.
 */
function drawWindNode (windObj) {
  const windContainer = document.createElement('div')
  windContainer.classList.add('wind-container')

  const speed = document.createElement('div')
  speed.classList.add('speed')
  speed.textContent = windObj.speed

  const deg = document.createElement('div')
  deg.classList.add('deg')
  deg.textContent = windObj.deg

  windContainer.appendChild(speed)
  windContainer.appendChild(deg)

  return windContainer
}


/***/ }),

/***/ "./src/static/weather-cloudy.png":
/*!***************************************!*\
  !*** ./src/static/weather-cloudy.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8d9224c9651087c637f9.png";

/***/ }),

/***/ "./src/static/weather-fog.png":
/*!************************************!*\
  !*** ./src/static/weather-fog.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "043d62fdfae9c85b63ea.png";

/***/ }),

/***/ "./src/static/weather-lightning-rainy.png":
/*!************************************************!*\
  !*** ./src/static/weather-lightning-rainy.png ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3c14e46a2b0622ed3c0e.png";

/***/ }),

/***/ "./src/static/weather-night.png":
/*!**************************************!*\
  !*** ./src/static/weather-night.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "facc7f8025f067d412a5.png";

/***/ }),

/***/ "./src/static/weather-rainy.png":
/*!**************************************!*\
  !*** ./src/static/weather-rainy.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fedd5dd5793ca061d82f.png";

/***/ }),

/***/ "./src/static/weather-snowy.png":
/*!**************************************!*\
  !*** ./src/static/weather-snowy.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b0b834fb65448ff2e110.png";

/***/ }),

/***/ "./src/static/weather-sunny.png":
/*!**************************************!*\
  !*** ./src/static/weather-sunny.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "63b05e9cc6f6916e8b31.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/api */ "./src/api/api.js");
/* harmony import */ var _api_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./api/parser */ "./src/api/parser.js");
/* harmony import */ var _components_weather__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/weather */ "./src/components/weather.js");
/* harmony import */ var _components_temperature__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/temperature */ "./src/components/temperature.js");
/* harmony import */ var _components_humidity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/humidity */ "./src/components/humidity.js");
/* harmony import */ var _components_pressure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/pressure */ "./src/components/pressure.js");
/* harmony import */ var _components_wind__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/wind */ "./src/components/wind.js");
/* harmony import */ var _components_cloudiness__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/cloudiness */ "./src/components/cloudiness.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./style.css */ "./src/style.css");










const API_KEY = '08d632f209c72452f8b88dcb7c9aa7f3'

const location = 'Australia'

const weatherPromise = (0,_api_api__WEBPACK_IMPORTED_MODULE_0__["default"])(API_KEY, location)

weatherPromise
  .then(r => {
    const timeObj = (0,_api_parser__WEBPACK_IMPORTED_MODULE_1__.getTime)(r)
    const weatherObj = (0,_api_parser__WEBPACK_IMPORTED_MODULE_1__.getWeather)(r)
    const temperatureObj = (0,_api_parser__WEBPACK_IMPORTED_MODULE_1__.getTemperature)(r)
    const humidityObj = (0,_api_parser__WEBPACK_IMPORTED_MODULE_1__.getHumidity)(r)
    const pressureObj = (0,_api_parser__WEBPACK_IMPORTED_MODULE_1__.getPressure)(r)
    const windObj = (0,_api_parser__WEBPACK_IMPORTED_MODULE_1__.getWind)(r)
    const cloudinessObj = (0,_api_parser__WEBPACK_IMPORTED_MODULE_1__.getCloudiness)(r)

    document.body.appendChild((0,_components_weather__WEBPACK_IMPORTED_MODULE_2__["default"])(weatherObj, timeObj))
    document.body.appendChild((0,_components_temperature__WEBPACK_IMPORTED_MODULE_3__["default"])(temperatureObj))
    document.body.appendChild((0,_components_humidity__WEBPACK_IMPORTED_MODULE_4__["default"])(humidityObj))
    document.body.appendChild((0,_components_pressure__WEBPACK_IMPORTED_MODULE_5__["default"])(pressureObj))
    document.body.appendChild((0,_components_wind__WEBPACK_IMPORTED_MODULE_6__["default"])(windObj))
    document.body.appendChild((0,_components_cloudiness__WEBPACK_IMPORTED_MODULE_7__["default"])(cloudinessObj))
  })

weatherPromise.then(r => console.log(r))

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QzdGO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsTUFBTTtBQUNqQixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7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Z0I7QUFDOUMsOEJBQThCLDREQUFZO0FBQzFDLDhCQUE4QixrRUFBa0I7QUFDaEQsR0FBRzs7QUFFSCIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2FwaS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpL3BhcnNlci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL2Nsb3VkaW5lc3MuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy9odW1pZGl0eS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9jb21wb25lbnRzL3ByZXNzdXJlLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvdGVtcGVyYXR1cmUuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvY29tcG9uZW50cy93ZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2NvbXBvbmVudHMvd2luZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xcbn1cXG5cXG5ib2R5ID4gKiB7XFxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcXG59XFxuXFxuYm9keSA+ICoge1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvKipcbiAqIFRoaXMgbW9kdWxlIGlzIHJlc3BvbnNpYmxlIGZvciBmZXRjaGluZyB3ZWF0aGVyIGluZm9ybWF0aW9uIGZyb20gT3BlbldlYXRoZXIuXG4gKi9cblxuLyoqXG4gKiBGZXRjaGVzIHdlYXRoZXIgaW5mb3JtYXRpb24gZnJvbSBPcGVuV2VhdGhlciBhc3luY2hyb25vdXNseS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBBUElfS0VZIC0gQVBJIGtleSBmcm9tIE9wZW5XZWF0aGVyLlxuICogQHBhcmFtIHtzdHJpbmd9IGxvY2F0aW9uIC0gTG9jYXRpb24gZm9yIHRoZSB3ZWF0aGVyIGluZm9ybWF0aW9uIGFzIHJlcXVlc3RlZC5cbiAqIEByZXR1cm5zIHtQcm9taXNlfSBQcm9taXNlIG9mIGEgSlNPTiBmcm9tIE9wZW5XZWF0aGVyLlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyUHJvbWlzZSAoQVBJX0tFWSwgbG9jYXRpb24pIHtcbiAgLy8gSXNzdWVzOiBObyBkZWZlbnNlIGFnYWluc3QgdW5yZXNvbHZlZCwgcmVqZWN0ZWQgcmVxdWVzdHMuXG4gIGNvbnN0IHVybCA9IGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9xPSR7bG9jYXRpb259JmFwcGlkPSR7QVBJX0tFWX0mdW5pdHM9bWV0cmljYFxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybClcbiAgY29uc3QgcmVzcG9uc2VKc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gIHJldHVybiByZXNwb25zZUpzb25cbn1cbiIsIi8qKlxuICogVGhpcyBtb2R1bGUgaXMgcmVzcG9uc2libGUgZm9yIHBhcnNpbmcgdGhlIEpTT04gb2JqZWN0IGZyb20gT3BlbldlYXRoZXIgYW5kXG4gKiBoYXMgc2V2ZXJhbCBmdW5jdGlvbnMgZm9yIHJldHVybmluZyBkaWZmZXJlbnQgd2VhdGhlciBpbmZvcm1hdGlvbiBlLmcuLCB3aW5kLFxuICogcmFpbmZhbGwsIGV0Yy5cbiAqIEluZm9ybWF0aW9uIGFyZSByZXR1cm5lZCBpbiB0aGUgZm9ybSBvZiBhbiBPYmplY3QuXG4gKi9cbmV4cG9ydCB7XG4gIGdldFdlYXRoZXIsXG4gIGdldFRlbXBlcmF0dXJlLFxuICBnZXRIdW1pZGl0eSxcbiAgZ2V0UHJlc3N1cmUsXG4gIGdldFdpbmQsXG4gIGdldENsb3VkaW5lc3MsXG4gIGdldFRpbWUsXG4gIGdldExvY2F0aW9uTmFtZVxufVxuXG4vKipcbiAqIFJldHVybnMgY3VycmVudCB3ZWF0aGVyIGluZm9ybWF0aW9uIGFzIGFuIE9iamVjdCBjb250YWluaW5nICdtYWluJyxcbiAqICdkZXNjcmlwdGlvbicsIGFuZCAnaWQnLCB3aGVyZSAnbWFpbicgaXMgdGhlIGtleSBmb3IgdGhlIG92ZXJ2aWV3IG9mIHRoZVxuICogY3VycmVudCB3ZWF0aGVyLCAnZGVzY3JpcHRpb24nIGlzIHRoZSBrZXkgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb24gb2YgdGhlXG4gKiBjdXJyZW50IHdlYXRoZXIsICdpZCcgaXMgdGhlIGtleSBmb3IgaWRlbnRpZmllciBvZiB0aGUgY3VycmVudCB3ZWF0aGVyIGFzXG4gKiBjbGFzc2lmaWVkIGJ5IE9wZW5XZWF0aGVyLlxuICogQHBhcmFtIHtKU09OfSB3ZWF0aGVySnNvbiAtIEpTT04gZnJvbSBPcGVuV2VhdGhlci5cbiAqIEByZXR1cm5zIHtPYmplY3R9IGFuIE9iamVjdCB3aXRoIGN1cnJlbnQgd2VhdGhlciBpbmZvcm1hdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ2V0V2VhdGhlciAod2VhdGhlckpzb24pIHtcbiAgY29uc3Qgd2VhdGhlciA9IHdlYXRoZXJKc29uLndlYXRoZXJbMF0gLy8gRmlyc3QgcmVzdWx0IHRha2VzIHByZWNlZGVuY2VcbiAgY29uc3QgbWFpbiA9IHdlYXRoZXIubWFpblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IHdlYXRoZXIuZGVzY3JpcHRpb25cbiAgY29uc3QgaWQgPSB3ZWF0aGVyLmlkXG4gIHJldHVybiB7XG4gICAgbWFpbixcbiAgICBkZXNjcmlwdGlvbixcbiAgICBpZFxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBjdXJyZW50IHRlbXBlcmF0dXJlIGluZm9ybWF0aW9uIGFzIGFuIE9iamVjdCBjb250YWluaW5nICd0ZW1wJyBhbmRcbiAqICdmZWVsc0xpa2UnLCB3aGVyZSAndGVtcCcgaXMgdGhlIGtleSBmb3IgdGhlIGN1cnJlbnQgdGVtcGVyYXR1cmUsXG4gKiBhbmQgJ2ZlZWxzTGlrZScgaXMgdGhlIGtleSBmb3IgdGhlIHRlbXBlcmF0dXJlIGl0IGZlZWxzIGxpa2UuXG4gKiBAcGFyYW0ge0pTT059IHdlYXRoZXJKc29uIC0gSlNPTiBmcm9tIE9wZW5XZWF0aGVyLlxuICogQHJldHVybnMge09iamVjdH0gYW4gT2JqZWN0IHdpdGggY3VycmVudCB0ZW1wZXJhdHVyZSBpbmZvcm1hdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ2V0VGVtcGVyYXR1cmUgKHdlYXRoZXJKc29uKSB7XG4gIGNvbnN0IG1haW4gPSB3ZWF0aGVySnNvbi5tYWluXG4gIGNvbnN0IHRlbXAgPSBtYWluLnRlbXBcbiAgY29uc3QgZmVlbHNMaWtlID0gbWFpbi5mZWVsc19saWtlXG4gIHJldHVybiB7XG4gICAgdGVtcCxcbiAgICBmZWVsc0xpa2VcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgY3VycmVudCBodW1pZGl0eSBpbmZvcm1hdGlvbiBhcyBhbiBPYmplY3QgY29udGFpbmluZyAnaHVtaWRpdHknLFxuICogd2hlcmUgJ2h1bWlkaXR5JyBpcyB0aGUga2V5IGZvciB0aGUgY3VycmVudCBodW1pZGl0eS5cbiAqIEBwYXJhbSB7SlNPTn0gd2VhdGhlckpzb24gLSBKU09OIGZyb20gT3BlbldlYXRoZXIuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBhbiBPYmplY3Qgd2l0aCBjdXJyZW50IGh1bWlkaXR5IGluZm9ybWF0aW9uLlxuICovXG5mdW5jdGlvbiBnZXRIdW1pZGl0eSAod2VhdGhlckpzb24pIHtcbiAgY29uc3QgbWFpbiA9IHdlYXRoZXJKc29uLm1haW5cbiAgY29uc3QgaHVtaWRpdHkgPSBtYWluLmh1bWlkaXR5XG4gIHJldHVybiB7XG4gICAgaHVtaWRpdHlcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgY3VycmVudCBwcmVzc3VyZSBpbmZvcm1hdGlvbiBhcyBhbiBPYmplY3QgY29udGFpbmluZyAncHJlc3N1cmUnLFxuICogd2hlcmUgJ3ByZXNzdXJlJyBpcyB0aGUga2V5IGZvciB0aGUgY3VycmVudCBwcmVzc3VyZS5cbiAqIEBwYXJhbSB7SlNPTn0gd2VhdGhlckpzb24gLSBKU09OIGZyb20gT3BlbldlYXRoZXIuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBhbiBPYmplY3Qgd2l0aCBjdXJyZW50IHByZXNzdXJlIGluZm9ybWF0aW9uLlxuICovXG5mdW5jdGlvbiBnZXRQcmVzc3VyZSAod2VhdGhlckpzb24pIHtcbiAgY29uc3QgbWFpbiA9IHdlYXRoZXJKc29uLm1haW5cbiAgY29uc3QgcHJlc3N1cmUgPSBtYWluLnByZXNzdXJlXG4gIHJldHVybiB7XG4gICAgcHJlc3N1cmVcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgY3VycmVudCB3aW5kIGluZm9ybWF0aW9uIGFzIGFuIE9iamVjdCBjb250YWluaW5nICdzcGVlZCcgYW5kICdkZWcnLFxuICogd2hlcmUgJ3NwZWVkJyBpcyB0aGUga2V5IGZvciB0aGUgY3VycmVudCB3aW5kIHNwZWVkLCBhbmQgJ2RlZycgaXMgdGhlIGtleVxuICogZm9yIHRoZSBjdXJyZW50IHdpbmQgZGlyZWN0aW9uIGluIGRlZ3JlZXMuXG4gKiBAcGFyYW0ge0pTT059IHdlYXRoZXJKc29uIC0gSlNPTiBmcm9tIE9wZW5XZWF0aGVyLlxuICogQHJldHVybnMge09iamVjdH0gYW4gT2JqZWN0IHdpdGggY3VycmVudCB3aW5kIGluZm9ybWF0aW9uLlxuICovXG5mdW5jdGlvbiBnZXRXaW5kICh3ZWF0aGVySnNvbikge1xuICBjb25zdCB3aW5kID0gd2VhdGhlckpzb24ud2luZFxuICBjb25zdCBzcGVlZCA9IHdpbmQuc3BlZWRcbiAgY29uc3QgZGVnID0gd2luZC5kZWdcbiAgcmV0dXJuIHtcbiAgICBzcGVlZCxcbiAgICBkZWdcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgY3VycmVudCBjbG91ZGluZXNzIGluZm9ybWF0aW9uIGFzIGFuIE9iamVjdCBjb250YWluaW5nICdjbG91ZGluZXNzJyxcbiAqIHdoZXJlICdjbG91ZGluZXNzJyBpcyB0aGUga2V5IGZvciB0aGUgY3VycmVudCBjbG91ZGluZXNzLlxuICogQHBhcmFtIHtKU09OfSB3ZWF0aGVySnNvbiAtIEpTT04gZnJvbSBPcGVuV2VhdGhlci5cbiAqIEByZXR1cm5zIHtPYmplY3R9IGFuIE9iamVjdCB3aXRoIGN1cnJlbnQgY2xvdWRpbmVzcyBpbmZvcm1hdGlvbi5cbiAqL1xuZnVuY3Rpb24gZ2V0Q2xvdWRpbmVzcyAod2VhdGhlckpzb24pIHtcbiAgY29uc3QgY2xvdWQgPSB3ZWF0aGVySnNvbi5jbG91ZHNcbiAgY29uc3QgY2xvdWRpbmVzcyA9IGNsb3VkLmFsbFxuICByZXR1cm4ge1xuICAgIGNsb3VkaW5lc3NcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJlbGV2YW50IHRpbWUgaW5mb3JtYXRpb24gb2YgdGhlIGxvY2F0aW9uIHF1ZXJpZWQgYXMgYW4gT2JqZWN0XG4gKiBjb250YWluaW5nICdzdW5yaXNlJywgJ3N1bnNldCcsICd0aW1lem9uZScsICdkdCcsIHdoZXJlICdzdW5yaXNlJyBhbmRcbiAqICdzdW5zZXQnIGlzIHRoZSByZXNwZWN0aXZlIGtleSBmb3Igc3VucmlzZS9zdW5zZXQgdGltZSBpbiBVbml4IHRpbWUsICdkdCcgaXNcbiAqIHRoZSB0aW1lIG9mIHRoZSBjYWxjdWxhdGlvbiBpbiBVbml4IHRpbWUgYW5kICd0aW1lem9uZScgaXMgdGhlIGRpZmZlcmVuY2VcbiAqIGZyb20gVVRDIGluIHNlY29uZHMuXG4gKiBAcGFyYW0ge0pTT059IHdlYXRoZXJKc29uIC0gSlNPTiBmcm9tIE9wZW5XZWF0aGVyLlxuICogQHJldHVybnMge09iamVjdH0gYW4gT2JqZWN0IHdpdGggc3VucmlzZS9zdW5zZXQgdGltZS5cbiAqL1xuZnVuY3Rpb24gZ2V0VGltZSAod2VhdGhlckpzb24pIHtcbiAgY29uc3Qgc3lzID0gd2VhdGhlckpzb24uc3lzXG4gIGNvbnN0IHN1bnJpc2UgPSBzeXMuc3VucmlzZVxuICBjb25zdCBzdW5zZXQgPSBzeXMuc3Vuc2V0XG4gIGNvbnN0IGR0ID0gd2VhdGhlckpzb24uZHRcblxuICBjb25zdCB0aW1lem9uZSA9IHdlYXRoZXJKc29uLnRpbWV6b25lXG4gIHJldHVybiB7XG4gICAgc3VucmlzZSxcbiAgICBzdW5zZXQsXG4gICAgZHQsXG4gICAgdGltZXpvbmVcbiAgfVxufVxuXG4vKipcbiAqIFJldHVybiB0aGUgbmFtZSBvZiB0aGUgbG9jYXRpb24gYXMgZm9ybWF0dGVkIGJ5IE9wZW5XZWF0aGVyIGFzIGFuIE9iamVjdFxuICogY29udGFpbmluZyAnbmFtZScsIHdoZXJlICduYW1lJyBpcyB0aGUgbmFtZSBvZiB0aGUgbG9jYXRpb24uXG4gKiBAcGFyYW0ge0pTT059IHdlYXRoZXJKc29uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBhbiBPYmplY3Qgd2l0aCB0aGUgbmFtZSBvZiB0aGUgbG9jYXRpb24gcXVlcmllZC5cbiAqL1xuZnVuY3Rpb24gZ2V0TG9jYXRpb25OYW1lICh3ZWF0aGVySnNvbikge1xuICBjb25zdCBuYW1lID0gd2VhdGhlckpzb24ubmFtZVxuICByZXR1cm4ge1xuICAgIG5hbWVcbiAgfVxufVxuLy8gVE9ETzogUmFpbiwgc25vdywgdmlzaWJpbGl0eVxuIiwiLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBkcmF3cyBhIGRpdiBmb3IgdGhlIGNsb3VkaW5lc3MgaW5mb3JtYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdDbG91ZGluZXNzTm9kZSAoY2xvdWRpbmVzc09iaikge1xuICBjb25zdCBjbG91ZGluZXNzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgY2xvdWRpbmVzc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjbG91ZGluZXNzLWNvbnRhaW5lcicpXG5cbiAgY29uc3QgY2xvdWRpbmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGNsb3VkaW5lc3MuY2xhc3NMaXN0LmFkZCgnY2xvdWRpbmVzcycpXG4gIGNsb3VkaW5lc3MudGV4dENvbnRlbnQgPSBjbG91ZGluZXNzT2JqLmNsb3VkaW5lc3NcblxuICBjbG91ZGluZXNzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNsb3VkaW5lc3MpXG5cbiAgcmV0dXJuIGNsb3VkaW5lc3NDb250YWluZXJcbn1cbiIsIi8qKlxuICogVGhpcyBjb21wb25lbnQgZHJhd3MgYSBkaXYgZm9yIHRoZSBodW1pZGl0eSBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZHJhd0h1bWlkaXR5Tm9kZSAoaHVtaWRpdHlPYmopIHtcbiAgY29uc3QgaHVtaWRpdHlDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBodW1pZGl0eUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdodW1pZGl0eS1jb250YWluZXInKVxuXG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgaHVtaWRpdHkuY2xhc3NMaXN0LmFkZCgnaHVtaWRpdHknKVxuICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGh1bWlkaXR5T2JqLmh1bWlkaXR5XG5cbiAgaHVtaWRpdHlDb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpXG5cbiAgcmV0dXJuIGh1bWlkaXR5Q29udGFpbmVyXG59XG4iLCIvKipcbiAqIFRoaXMgY29tcG9uZW50IGRyYXdzIGEgZGl2IGZvciB0aGUgcHJlc3N1cmUgaW5mb3JtYXRpb24uXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRyYXdQcmVzc3VyZU5vZGUgKHByZXNzdXJlT2JqKSB7XG4gIGNvbnN0IHByZXNzdXJlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgcHJlc3N1cmVDb250YWluZXIuY2xhc3NMaXN0LmFkZCgncHJlc3N1cmUtY29udGFpbmVyJylcblxuICBjb25zdCBwcmVzc3VyZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHByZXNzdXJlLmNsYXNzTGlzdC5hZGQoJ3ByZXNzdXJlJylcbiAgcHJlc3N1cmUudGV4dENvbnRlbnQgPSBwcmVzc3VyZU9iai5wcmVzc3VyZVxuXG4gIHByZXNzdXJlQ29udGFpbmVyLmFwcGVuZENoaWxkKHByZXNzdXJlKVxuXG4gIHJldHVybiBwcmVzc3VyZUNvbnRhaW5lclxufVxuIiwiLyoqXG4gKiBUaGlzIGNvbXBvbmVudCBkcmF3cyBhIGRpdiBmb3IgdGVtcGVyYXR1cmUgaW5mb3JtYXRpb24gYW5kXG4gKiBmZWVscy1saWtlIHRlbXBlcmF0dXJlLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmF3VGVtcGVyYXR1cmVOb2RlICh0ZW1wZXJhdHVyZU9iaikge1xuICBjb25zdCB0ZW1wZXJhdHVyZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRlbXBlcmF0dXJlQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3RlbXBlcmF0dXJlLWNvbnRhaW5lcicpXG5cbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHRlbXAuY2xhc3NMaXN0LmFkZCgndGVtcCcpXG4gIHRlbXAudGV4dENvbnRlbnQgPSB0ZW1wZXJhdHVyZU9iai50ZW1wXG5cbiAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgZmVlbHNMaWtlLmNsYXNzTGlzdC5hZGQoJ2ZlZWxzTGlrZScpXG4gIGZlZWxzTGlrZS50ZXh0Q29udGVudCA9IHRlbXBlcmF0dXJlT2JqLmZlZWxzTGlrZVxuXG4gIHRlbXBlcmF0dXJlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXApXG4gIHRlbXBlcmF0dXJlQ29udGFpbmVyLmFwcGVuZENoaWxkKGZlZWxzTGlrZSlcblxuICByZXR1cm4gdGVtcGVyYXR1cmVDb250YWluZXJcbn1cbiIsIi8qKlxuICogVGhpcyBjb21wb25lbnQgZHJhd3MgYSBkaXYgZm9yIHRoZSBtYWluIHdlYXRoZXIgaW5mb3JtYXRpb24gYW5kIGl0c1xuICogZGVzY3JpcHRpb24uXG4gKi9cbmltcG9ydCBMaWdodG5pbmcgZnJvbSAnLi4vc3RhdGljL3dlYXRoZXItbGlnaHRuaW5nLXJhaW55LnBuZydcbmltcG9ydCBSYWluIGZyb20gJy4uL3N0YXRpYy93ZWF0aGVyLXJhaW55LnBuZydcbmltcG9ydCBTbm93IGZyb20gJy4uL3N0YXRpYy93ZWF0aGVyLXNub3d5LnBuZydcbmltcG9ydCBGb2cgZnJvbSAnLi4vc3RhdGljL3dlYXRoZXItZm9nLnBuZydcbmltcG9ydCBTdW4gZnJvbSAnLi4vc3RhdGljL3dlYXRoZXItc3VubnkucG5nJ1xuaW1wb3J0IE5pZ2h0IGZyb20gJy4uL3N0YXRpYy93ZWF0aGVyLW5pZ2h0LnBuZydcbmltcG9ydCBDbG91ZCBmcm9tICcuLi9zdGF0aWMvd2VhdGhlci1jbG91ZHkucG5nJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmF3V2VhdGhlck5vZGUgKHdlYXRoZXJPYmosIHRpbWVPYmopIHtcbiAgY29uc3Qgd2VhdGhlckNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHdlYXRoZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2VhdGhlci1jb250YWluZXInKVxuXG4gIGNvbnN0IGljb24gPSBuZXcgSW1hZ2UoKVxuICBpY29uLnNyYyA9IHNlbGVjdFdlYXRoZXJJY29uKHdlYXRoZXJPYmouaWQsIHRpbWVPYmopXG5cbiAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIG1haW4uY2xhc3NMaXN0LmFkZCgnbWFpbicpXG4gIG1haW4udGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLm1haW5cblxuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJylcbiAgZGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSB3ZWF0aGVyT2JqLmRlc2NyaXB0aW9uXG5cbiAgd2VhdGhlckNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKVxuICB3ZWF0aGVyQ29udGFpbmVyLmFwcGVuZENoaWxkKG1haW4pXG4gIHdlYXRoZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pXG5cbiAgcmV0dXJuIHdlYXRoZXJDb250YWluZXJcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGFuIGljb24gcmVwcmVzZW50YXRpdmUgb2YgdGhlIGN1cnJlbnQgd2VhdGhlciB0aHJvdWdoIGFuIElEIGZyb20gdGhlXG4gKiBPcGVuV2VhdGhlciBKU09OLlxuICogQHBhcmFtIHtOdW1iZXJ9IGlkIC0gSUQgZnJvbSBPcGVuV2VhdGhlcidzIEpTT05cbiAqIEBwYXJhbSB7T2JqZWN0fSBzdW5PYmogLSBPYmplY3QgcmV0dXJuZWQgZnJvbSBwYXJzZXIuZ2V0U3VucmlzZVN1bnNldFxuICogQHJldHVybnMge1N0cmluZ30gYW4gVVJMIHRvIHRoZSBpY29uLlxuICovXG5mdW5jdGlvbiBzZWxlY3RXZWF0aGVySWNvbiAoaWQsIHRpbWVPYmopIHtcbiAgaWYgKGlkID49IDIwMCAmJiBpZCA8PSAyOTkpIHtcbiAgICAvLyBUaHVuZGVyc3Rvcm1cbiAgICByZXR1cm4gTGlnaHRuaW5nXG4gIH0gZWxzZSBpZiAoaWQgPj0gMzAwICYmIGlkIDw9IDM5OSkge1xuICAgIC8vIERyaXp6bGVcbiAgICByZXR1cm4gUmFpblxuICB9IGVsc2UgaWYgKGlkID49IDUwMCAmJiBpZCA8PSA1OTkpIHtcbiAgICAvLyBSYWluXG4gICAgcmV0dXJuIFJhaW5cbiAgfSBlbHNlIGlmIChpZCA+PSA2MDAgJiYgaWQgPD0gNjk5KSB7XG4gICAgLy8gU25vd1xuICAgIHJldHVybiBTbm93XG4gIH0gZWxzZSBpZiAoaWQgPj0gNzAwICYmIGlkIDw9IDc5OSkge1xuICAgIC8vIEF0bW9zcGhlcmVcbiAgICByZXR1cm4gRm9nXG4gIH0gZWxzZSBpZiAoaWQgPT09IDgwMCkge1xuICAgIC8vIENsZWFyXG4gICAgY29uc3QgbG9jYWxpemVkVGltZU5vdyA9IHRpbWVPYmouZHQgKyB0aW1lT2JqLnRpbWV6b25lXG4gICAgaWYgKGxvY2FsaXplZFRpbWVOb3cgPiB0aW1lT2JqLnN1bnNldCkge1xuICAgICAgcmV0dXJuIFN1blxuICAgIH0gZWxzZSBpZiAobG9jYWxpemVkVGltZU5vdyA+IHRpbWVPYmouc3VucmlzZSkge1xuICAgICAgcmV0dXJuIE5pZ2h0XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBTdW5cbiAgICB9XG4gIH0gZWxzZSBpZiAoaWQgPj0gODAxICYmIGlkIDw9IDgwOSkge1xuICAgIC8vIENsb3Vkc1xuICAgIHJldHVybiBDbG91ZFxuICB9XG59XG4iLCIvKipcbiAqIFRoaXMgY29tcG9uZW50IGRyYXdzIGEgZGl2IGZvciB0aGUgd2luZCBzcGVlZCBhbmQgZGVncmVlIGluZm9ybWF0aW9uLlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkcmF3V2luZE5vZGUgKHdpbmRPYmopIHtcbiAgY29uc3Qgd2luZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gIHdpbmRDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnd2luZC1jb250YWluZXInKVxuXG4gIGNvbnN0IHNwZWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgc3BlZWQuY2xhc3NMaXN0LmFkZCgnc3BlZWQnKVxuICBzcGVlZC50ZXh0Q29udGVudCA9IHdpbmRPYmouc3BlZWRcblxuICBjb25zdCBkZWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxuICBkZWcuY2xhc3NMaXN0LmFkZCgnZGVnJylcbiAgZGVnLnRleHRDb250ZW50ID0gd2luZE9iai5kZWdcblxuICB3aW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKHNwZWVkKVxuICB3aW5kQ29udGFpbmVyLmFwcGVuZENoaWxkKGRlZylcblxuICByZXR1cm4gd2luZENvbnRhaW5lclxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBnZXRXZWF0aGVyUHJvbWlzZSBmcm9tICcuL2FwaS9hcGknXG5pbXBvcnQge1xuICBnZXRXZWF0aGVyLFxuICBnZXRUaW1lLFxuICBnZXRUZW1wZXJhdHVyZSxcbiAgZ2V0SHVtaWRpdHksXG4gIGdldFByZXNzdXJlLFxuICBnZXRXaW5kLFxuICBnZXRDbG91ZGluZXNzXG59IGZyb20gJy4vYXBpL3BhcnNlcidcbmltcG9ydCBkcmF3V2VhdGhlck5vZGUgZnJvbSAnLi9jb21wb25lbnRzL3dlYXRoZXInXG5pbXBvcnQgZHJhd1RlbXBlcmF0dXJlTm9kZSBmcm9tICcuL2NvbXBvbmVudHMvdGVtcGVyYXR1cmUnXG5pbXBvcnQgZHJhd0h1bWlkaXR5Tm9kZSBmcm9tICcuL2NvbXBvbmVudHMvaHVtaWRpdHknXG5pbXBvcnQgZHJhd1ByZXNzdXJlTm9kZSBmcm9tICcuL2NvbXBvbmVudHMvcHJlc3N1cmUnXG5pbXBvcnQgZHJhd1dpbmROb2RlIGZyb20gJy4vY29tcG9uZW50cy93aW5kJ1xuaW1wb3J0IGRyYXdDbG91ZGluZXNzTm9kZSBmcm9tICcuL2NvbXBvbmVudHMvY2xvdWRpbmVzcydcbmltcG9ydCAnLi9zdHlsZS5jc3MnXG5cbmNvbnN0IEFQSV9LRVkgPSAnMDhkNjMyZjIwOWM3MjQ1MmY4Yjg4ZGNiN2M5YWE3ZjMnXG5cbmNvbnN0IGxvY2F0aW9uID0gJ0F1c3RyYWxpYSdcblxuY29uc3Qgd2VhdGhlclByb21pc2UgPSBnZXRXZWF0aGVyUHJvbWlzZShBUElfS0VZLCBsb2NhdGlvbilcblxud2VhdGhlclByb21pc2VcbiAgLnRoZW4ociA9PiB7XG4gICAgY29uc3QgdGltZU9iaiA9IGdldFRpbWUocilcbiAgICBjb25zdCB3ZWF0aGVyT2JqID0gZ2V0V2VhdGhlcihyKVxuICAgIGNvbnN0IHRlbXBlcmF0dXJlT2JqID0gZ2V0VGVtcGVyYXR1cmUocilcbiAgICBjb25zdCBodW1pZGl0eU9iaiA9IGdldEh1bWlkaXR5KHIpXG4gICAgY29uc3QgcHJlc3N1cmVPYmogPSBnZXRQcmVzc3VyZShyKVxuICAgIGNvbnN0IHdpbmRPYmogPSBnZXRXaW5kKHIpXG4gICAgY29uc3QgY2xvdWRpbmVzc09iaiA9IGdldENsb3VkaW5lc3MocilcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHJhd1dlYXRoZXJOb2RlKHdlYXRoZXJPYmosIHRpbWVPYmopKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHJhd1RlbXBlcmF0dXJlTm9kZSh0ZW1wZXJhdHVyZU9iaikpXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkcmF3SHVtaWRpdHlOb2RlKGh1bWlkaXR5T2JqKSlcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRyYXdQcmVzc3VyZU5vZGUocHJlc3N1cmVPYmopKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHJhd1dpbmROb2RlKHdpbmRPYmopKVxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZHJhd0Nsb3VkaW5lc3NOb2RlKGNsb3VkaW5lc3NPYmopKVxuICB9KVxuXG53ZWF0aGVyUHJvbWlzZS50aGVuKHIgPT4gY29uc29sZS5sb2cocikpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=