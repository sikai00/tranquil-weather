/**
 * This component draws a div for temperature information and
 * feels-like temperature.
 */
export default function drawTemperatureNode (temperatureObj) {
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
