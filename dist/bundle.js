/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const API_KEY = '08d632f209c72452f8b88dcb7c9aa7f3'

const location = 'Singapore'

const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`

fetch(url).then(response => response.json()).then(response => console.log(response))

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7O0FBRUEsaUVBQWlFLFNBQVMsU0FBUyxRQUFROztBQUUzRiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEFQSV9LRVkgPSAnMDhkNjMyZjIwOWM3MjQ1MmY4Yjg4ZGNiN2M5YWE3ZjMnXG5cbmNvbnN0IGxvY2F0aW9uID0gJ1NpbmdhcG9yZSdcblxuY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHtBUElfS0VZfWBcblxuZmV0Y2godXJsKS50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSkudGhlbihyZXNwb25zZSA9PiBjb25zb2xlLmxvZyhyZXNwb25zZSkpXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=