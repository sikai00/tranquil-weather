/**
 * This component draws a div for the pressure information.
 */
export default function drawPressureNode (pressureObj) {
  const pressureContainer = document.createElement('div')
  pressureContainer.classList.add('pressure-container')

  const pressure = document.createElement('div')
  pressure.classList.add('pressure')
  pressure.textContent = `${pressureObj.pressure} hPa`

  pressureContainer.appendChild(pressure)

  return pressureContainer
}
