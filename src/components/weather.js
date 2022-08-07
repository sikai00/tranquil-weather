/**
 * This component draws a div for the main weather information and its
 * description.
 */
import Lightning from '../static/weather-lightning-rainy.png'
import Rain from '../static/weather-rainy.png'
import Snow from '../static/weather-snowy.png'
import Fog from '../static/weather-fog.png'
import Sun from '../static/weather-sunny.png'
import Night from '../static/weather-night.png'
import Cloud from '../static/weather-cloudy.png'

export default function drawWeatherNode (weatherObj, timeObj) {
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
    return Lightning
  } else if (id >= 300 && id <= 399) {
    // Drizzle
    return Rain
  } else if (id >= 500 && id <= 599) {
    // Rain
    return Rain
  } else if (id >= 600 && id <= 699) {
    // Snow
    return Snow
  } else if (id >= 700 && id <= 799) {
    // Atmosphere
    return Fog
  } else if (id === 800) {
    // Clear
    const localizedTimeNow = timeObj.dt + timeObj.timezone
    if (localizedTimeNow > timeObj.sunset) {
      return Sun
    } else if (localizedTimeNow > timeObj.sunrise) {
      return Night
    } else {
      return Sun
    }
  } else if (id >= 801 && id <= 809) {
    // Clouds
    return Cloud
  }
}
