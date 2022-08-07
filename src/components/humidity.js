/**
 * This component draws a div for the humidity information.
 */
export default function drawHumidityNode (humidityObj) {
  const humidityContainer = document.createElement('div')
  humidityContainer.classList.add('humidity-container')

  const humidity = document.createElement('div')
  humidity.classList.add('humidity')
  humidity.textContent = humidityObj.humidity

  humidityContainer.appendChild(humidity)

  return humidityContainer
}
