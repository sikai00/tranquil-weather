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
  getCloudiness,
  getTime,
  getLocationName
}

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
