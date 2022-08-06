/**
 * This module is responsible for parsing the JSON object from OpenWeather and
 * has several functions for returning different weather information e.g., wind,
 * rainfall, etc.
 * Information are returned in the form of an Object.
 */
export {
  getWeather,
  getTemperature,
  getHumidity,
  getPressure,
  getWind,
  getCloudiness
}

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
