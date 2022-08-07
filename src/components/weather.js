/**
 * This component draws a div for the main weather information and its
 * description.
 */
import Rain from '../static/weather-rainy.png'

export default function drawWeatherNode (weatherObj) {
  const weatherContainer = document.createElement('div')
  weatherContainer.classList.add('weather-container')

  // TODO: Function to pick icon depending on the weather
  const icon = new Image()
  icon.src = Rain

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
