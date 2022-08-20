/**
 * This component draws a div for the pressure information.
 */
import Pressure from '../static/pressure.png'

export default function drawPressureNode (pressureObj) {
  const pressureContainer = document.createElement('div')
  pressureContainer.classList.add('pressure-container')

  const icon = new Image()
  icon.src = Pressure

  const pressure = document.createElement('div')
  pressure.classList.add('pressure')
  pressure.textContent = `${pressureObj.pressure} hPa`

  pressureContainer.appendChild(icon)
  pressureContainer.appendChild(pressure)

  return pressureContainer
}
