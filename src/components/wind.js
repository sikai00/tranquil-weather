/**
 * This component draws a div for the wind speed and degree information.
 */
export default function drawWindNode (windObj) {
  const windContainer = document.createElement('div')
  windContainer.classList.add('wind-container')

  const speed = document.createElement('div')
  speed.classList.add('speed')
  speed.textContent = windObj.speed

  const deg = document.createElement('div')
  deg.classList.add('deg')
  deg.textContent = windObj.deg

  windContainer.appendChild(speed)
  windContainer.appendChild(deg)

  return windContainer
}
