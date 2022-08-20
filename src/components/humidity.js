/**
 * This component draws a div for the humidity information.
 */
import Humidity from '../static/humidity.png'

export default function drawHumidityNode (humidityObj) {
  const humidityContainer = document.createElement('div')
  humidityContainer.classList.add('humidity-container')

  const icon = new Image()
  icon.src = Humidity

  const humidity = document.createElement('div')
  humidity.classList.add('humidity')
  humidity.textContent = `${humidityObj.humidity}%`

  humidityContainer.appendChild(icon)
  humidityContainer.appendChild(humidity)

  return humidityContainer
}
