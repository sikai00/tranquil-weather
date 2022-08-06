/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
/* harmony export */   "getPressure": () => (/* binding */ getPressure),
/* harmony export */   "getTemperature": () => (/* binding */ getTemperature),
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
 * Returns current weather information as an Object containing 'main' and
 * 'description', where 'main' is the key for the overview of the current
 * weather, and 'description' is the key for additional information of the
 * current weather.
 * @param {JSON} weatherJson - JSON from OpenWeather.
 * @returns {Object} an Object with current weather information.
 */
function getWeather (weatherJson) {
  const weather = weatherJson.weather[0]
  const main = weather.main
  const description = weather.description
  return {
    main,
    description
  }
}

/**
 * Returns current temperature information as an Object containing 'temperature'
 * and 'feelsLike', where 'temperature' is the key for the current temperature,
 * and 'feelsLike' is the key for the temperature it feels like.
 * @param {JSON} weatherJson - JSON from OpenWeather.
 * @returns {Object} an Object with current temperature information.
 */
function getTemperature (weatherJson) {
  const main = weatherJson.main
  const temperature = main.temperature
  const feelsLike = main.feels_like
  return {
    temperature,
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
  const cloud = weatherJson.cloud
  const cloudiness = cloud.all
  return {
    cloudiness
  }
}

// TODO: Rain, snow, visibility


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
/******/ 			// no module.id needed
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



const API_KEY = '08d632f209c72452f8b88dcb7c9aa7f3'

const location = 'Singapore'

const weatherPromise = (0,_api_api__WEBPACK_IMPORTED_MODULE_0__["default"])(API_KEY, location)

weatherPromise.then(r =>
  console.log((0,_api_parser__WEBPACK_IMPORTED_MODULE_1__.getWeather)(r))
)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLFFBQVE7QUFDbkIsV0FBVyxRQUFRO0FBQ25CLGFBQWEsU0FBUztBQUN0QjtBQUNlO0FBQ2Y7QUFDQSxtRUFBbUUsU0FBUyxTQUFTLFFBQVE7QUFDN0Y7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLE1BQU07QUFDakIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7VUM3R0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOeUM7QUFDQTs7QUFFekM7O0FBRUE7O0FBRUEsdUJBQXVCLG9EQUFpQjs7QUFFeEM7QUFDQSxjQUFjLHVEQUFVO0FBQ3hCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvYXBpL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9hcGkvcGFyc2VyLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUaGlzIG1vZHVsZSBpcyByZXNwb25zaWJsZSBmb3IgZmV0Y2hpbmcgd2VhdGhlciBpbmZvcm1hdGlvbiBmcm9tIE9wZW5XZWF0aGVyLlxuICovXG5cbi8qKlxuICogRmV0Y2hlcyB3ZWF0aGVyIGluZm9ybWF0aW9uIGZyb20gT3BlbldlYXRoZXIgYXN5bmNocm9ub3VzbHkuXG4gKiBAcGFyYW0ge3N0cmluZ30gQVBJX0tFWSAtIEFQSSBrZXkgZnJvbSBPcGVuV2VhdGhlci5cbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhdGlvbiAtIExvY2F0aW9uIGZvciB0aGUgd2VhdGhlciBpbmZvcm1hdGlvbiBhcyByZXF1ZXN0ZWQuXG4gKiBAcmV0dXJucyB7UHJvbWlzZX0gUHJvbWlzZSBvZiBhIEpTT04gZnJvbSBPcGVuV2VhdGhlci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlclByb21pc2UgKEFQSV9LRVksIGxvY2F0aW9uKSB7XG4gIC8vIElzc3VlczogTm8gZGVmZW5zZSBhZ2FpbnN0IHVucmVzb2x2ZWQsIHJlamVjdGVkIHJlcXVlc3RzLlxuICBjb25zdCB1cmwgPSBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2xvY2F0aW9ufSZhcHBpZD0ke0FQSV9LRVl9JnVuaXRzPW1ldHJpY2BcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpXG4gIGNvbnN0IHJlc3BvbnNlSnNvbiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKVxuICByZXR1cm4gcmVzcG9uc2VKc29uXG59XG4iLCIvKipcbiAqIFRoaXMgbW9kdWxlIGlzIHJlc3BvbnNpYmxlIGZvciBwYXJzaW5nIHRoZSBKU09OIG9iamVjdCBmcm9tIE9wZW5XZWF0aGVyIGFuZFxuICogaGFzIHNldmVyYWwgZnVuY3Rpb25zIGZvciByZXR1cm5pbmcgZGlmZmVyZW50IHdlYXRoZXIgaW5mb3JtYXRpb24gZS5nLiwgd2luZCxcbiAqIHJhaW5mYWxsLCBldGMuXG4gKiBJbmZvcm1hdGlvbiBhcmUgcmV0dXJuZWQgaW4gdGhlIGZvcm0gb2YgYW4gT2JqZWN0LlxuICovXG5leHBvcnQge1xuICBnZXRXZWF0aGVyLFxuICBnZXRUZW1wZXJhdHVyZSxcbiAgZ2V0SHVtaWRpdHksXG4gIGdldFByZXNzdXJlLFxuICBnZXRXaW5kLFxuICBnZXRDbG91ZGluZXNzXG59XG5cbi8qKlxuICogUmV0dXJucyBjdXJyZW50IHdlYXRoZXIgaW5mb3JtYXRpb24gYXMgYW4gT2JqZWN0IGNvbnRhaW5pbmcgJ21haW4nIGFuZFxuICogJ2Rlc2NyaXB0aW9uJywgd2hlcmUgJ21haW4nIGlzIHRoZSBrZXkgZm9yIHRoZSBvdmVydmlldyBvZiB0aGUgY3VycmVudFxuICogd2VhdGhlciwgYW5kICdkZXNjcmlwdGlvbicgaXMgdGhlIGtleSBmb3IgYWRkaXRpb25hbCBpbmZvcm1hdGlvbiBvZiB0aGVcbiAqIGN1cnJlbnQgd2VhdGhlci5cbiAqIEBwYXJhbSB7SlNPTn0gd2VhdGhlckpzb24gLSBKU09OIGZyb20gT3BlbldlYXRoZXIuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBhbiBPYmplY3Qgd2l0aCBjdXJyZW50IHdlYXRoZXIgaW5mb3JtYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGdldFdlYXRoZXIgKHdlYXRoZXJKc29uKSB7XG4gIGNvbnN0IHdlYXRoZXIgPSB3ZWF0aGVySnNvbi53ZWF0aGVyWzBdXG4gIGNvbnN0IG1haW4gPSB3ZWF0aGVyLm1haW5cbiAgY29uc3QgZGVzY3JpcHRpb24gPSB3ZWF0aGVyLmRlc2NyaXB0aW9uXG4gIHJldHVybiB7XG4gICAgbWFpbixcbiAgICBkZXNjcmlwdGlvblxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBjdXJyZW50IHRlbXBlcmF0dXJlIGluZm9ybWF0aW9uIGFzIGFuIE9iamVjdCBjb250YWluaW5nICd0ZW1wZXJhdHVyZSdcbiAqIGFuZCAnZmVlbHNMaWtlJywgd2hlcmUgJ3RlbXBlcmF0dXJlJyBpcyB0aGUga2V5IGZvciB0aGUgY3VycmVudCB0ZW1wZXJhdHVyZSxcbiAqIGFuZCAnZmVlbHNMaWtlJyBpcyB0aGUga2V5IGZvciB0aGUgdGVtcGVyYXR1cmUgaXQgZmVlbHMgbGlrZS5cbiAqIEBwYXJhbSB7SlNPTn0gd2VhdGhlckpzb24gLSBKU09OIGZyb20gT3BlbldlYXRoZXIuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBhbiBPYmplY3Qgd2l0aCBjdXJyZW50IHRlbXBlcmF0dXJlIGluZm9ybWF0aW9uLlxuICovXG5mdW5jdGlvbiBnZXRUZW1wZXJhdHVyZSAod2VhdGhlckpzb24pIHtcbiAgY29uc3QgbWFpbiA9IHdlYXRoZXJKc29uLm1haW5cbiAgY29uc3QgdGVtcGVyYXR1cmUgPSBtYWluLnRlbXBlcmF0dXJlXG4gIGNvbnN0IGZlZWxzTGlrZSA9IG1haW4uZmVlbHNfbGlrZVxuICByZXR1cm4ge1xuICAgIHRlbXBlcmF0dXJlLFxuICAgIGZlZWxzTGlrZVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBjdXJyZW50IGh1bWlkaXR5IGluZm9ybWF0aW9uIGFzIGFuIE9iamVjdCBjb250YWluaW5nICdodW1pZGl0eScsXG4gKiB3aGVyZSAnaHVtaWRpdHknIGlzIHRoZSBrZXkgZm9yIHRoZSBjdXJyZW50IGh1bWlkaXR5LlxuICogQHBhcmFtIHtKU09OfSB3ZWF0aGVySnNvbiAtIEpTT04gZnJvbSBPcGVuV2VhdGhlci5cbiAqIEByZXR1cm5zIHtPYmplY3R9IGFuIE9iamVjdCB3aXRoIGN1cnJlbnQgaHVtaWRpdHkgaW5mb3JtYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGdldEh1bWlkaXR5ICh3ZWF0aGVySnNvbikge1xuICBjb25zdCBtYWluID0gd2VhdGhlckpzb24ubWFpblxuICBjb25zdCBodW1pZGl0eSA9IG1haW4uaHVtaWRpdHlcbiAgcmV0dXJuIHtcbiAgICBodW1pZGl0eVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBjdXJyZW50IHByZXNzdXJlIGluZm9ybWF0aW9uIGFzIGFuIE9iamVjdCBjb250YWluaW5nICdwcmVzc3VyZScsXG4gKiB3aGVyZSAncHJlc3N1cmUnIGlzIHRoZSBrZXkgZm9yIHRoZSBjdXJyZW50IHByZXNzdXJlLlxuICogQHBhcmFtIHtKU09OfSB3ZWF0aGVySnNvbiAtIEpTT04gZnJvbSBPcGVuV2VhdGhlci5cbiAqIEByZXR1cm5zIHtPYmplY3R9IGFuIE9iamVjdCB3aXRoIGN1cnJlbnQgcHJlc3N1cmUgaW5mb3JtYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGdldFByZXNzdXJlICh3ZWF0aGVySnNvbikge1xuICBjb25zdCBtYWluID0gd2VhdGhlckpzb24ubWFpblxuICBjb25zdCBwcmVzc3VyZSA9IG1haW4ucHJlc3N1cmVcbiAgcmV0dXJuIHtcbiAgICBwcmVzc3VyZVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBjdXJyZW50IHdpbmQgaW5mb3JtYXRpb24gYXMgYW4gT2JqZWN0IGNvbnRhaW5pbmcgJ3NwZWVkJyBhbmQgJ2RlZycsXG4gKiB3aGVyZSAnc3BlZWQnIGlzIHRoZSBrZXkgZm9yIHRoZSBjdXJyZW50IHdpbmQgc3BlZWQsIGFuZCAnZGVnJyBpcyB0aGUga2V5XG4gKiBmb3IgdGhlIGN1cnJlbnQgd2luZCBkaXJlY3Rpb24gaW4gZGVncmVlcy5cbiAqIEBwYXJhbSB7SlNPTn0gd2VhdGhlckpzb24gLSBKU09OIGZyb20gT3BlbldlYXRoZXIuXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBhbiBPYmplY3Qgd2l0aCBjdXJyZW50IHdpbmQgaW5mb3JtYXRpb24uXG4gKi9cbmZ1bmN0aW9uIGdldFdpbmQgKHdlYXRoZXJKc29uKSB7XG4gIGNvbnN0IHdpbmQgPSB3ZWF0aGVySnNvbi53aW5kXG4gIGNvbnN0IHNwZWVkID0gd2luZC5zcGVlZFxuICBjb25zdCBkZWcgPSB3aW5kLmRlZ1xuICByZXR1cm4ge1xuICAgIHNwZWVkLFxuICAgIGRlZ1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBjdXJyZW50IGNsb3VkaW5lc3MgaW5mb3JtYXRpb24gYXMgYW4gT2JqZWN0IGNvbnRhaW5pbmcgJ2Nsb3VkaW5lc3MnLFxuICogd2hlcmUgJ2Nsb3VkaW5lc3MnIGlzIHRoZSBrZXkgZm9yIHRoZSBjdXJyZW50IGNsb3VkaW5lc3MuXG4gKiBAcGFyYW0ge0pTT059IHdlYXRoZXJKc29uIC0gSlNPTiBmcm9tIE9wZW5XZWF0aGVyLlxuICogQHJldHVybnMge09iamVjdH0gYW4gT2JqZWN0IHdpdGggY3VycmVudCBjbG91ZGluZXNzIGluZm9ybWF0aW9uLlxuICovXG5mdW5jdGlvbiBnZXRDbG91ZGluZXNzICh3ZWF0aGVySnNvbikge1xuICBjb25zdCBjbG91ZCA9IHdlYXRoZXJKc29uLmNsb3VkXG4gIGNvbnN0IGNsb3VkaW5lc3MgPSBjbG91ZC5hbGxcbiAgcmV0dXJuIHtcbiAgICBjbG91ZGluZXNzXG4gIH1cbn1cblxuLy8gVE9ETzogUmFpbiwgc25vdywgdmlzaWJpbGl0eVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgZ2V0V2VhdGhlclByb21pc2UgZnJvbSAnLi9hcGkvYXBpJ1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gJy4vYXBpL3BhcnNlcidcblxuY29uc3QgQVBJX0tFWSA9ICcwOGQ2MzJmMjA5YzcyNDUyZjhiODhkY2I3YzlhYTdmMydcblxuY29uc3QgbG9jYXRpb24gPSAnU2luZ2Fwb3JlJ1xuXG5jb25zdCB3ZWF0aGVyUHJvbWlzZSA9IGdldFdlYXRoZXJQcm9taXNlKEFQSV9LRVksIGxvY2F0aW9uKVxuXG53ZWF0aGVyUHJvbWlzZS50aGVuKHIgPT5cbiAgY29uc29sZS5sb2coZ2V0V2VhdGhlcihyKSlcbilcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==