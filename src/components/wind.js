/**
 * This component draws a div for the wind speed and degree information.
 */
import WindSpeed from '../static/wind-speed.png'
import WindDirection from '../static/wind-direction.png'

export default function drawWindNode (windObj) {
  const windContainer = document.createElement('div')
  windContainer.classList.add('wind-container')

  const speedContainer = document.createElement('div')
  speedContainer.classList.add('speed-container')
  const icon = new Image()
  icon.src = WindSpeed
  const speed = document.createElement('div')
  speed.textContent = `${windObj.speed} m/s`
  speedContainer.appendChild(icon)
  speedContainer.appendChild(speed)

  const degContainer = document.createElement('div')
  degContainer.classList.add('deg-container')
  const degIcon = new Image()
  degIcon.src = WindDirection
  const deg = document.createElement('div')
  deg.textContent = `${windObj.deg}°` // Improvement: Draw a compass instead
  degContainer.appendChild(degIcon)
  degContainer.appendChild(deg)

  windContainer.appendChild(speedContainer)
  windContainer.appendChild(degContainer)

  return windContainer
}
