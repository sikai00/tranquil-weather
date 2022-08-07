/**
 * This component draws a div for temperature information and
 * feels-like temperature.
 */
export default function drawTemperatureNode (temperatureObj) {
  const temperatureContainer = document.createElement('div')
  temperatureContainer.classList.add('temperature')

  const temperature = document.createElement('div')
  temperature.classList.add('temperature')
  temperature.textContent = temperatureObj.temperature

  const feelsLike = document.createElement('div')
  feelsLike.classList.add('feelsLike')
  feelsLike.textContent = temperatureObj.feelsLike

  temperatureObj.appendChild(temperature)
  temperatureObj.appendChild(feelsLike)

  return temperatureObj
}
