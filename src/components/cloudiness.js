/**
 * This component draws a div for the cloudiness information.
 */
import Cloudiness from '../static/cloudiness.png'

export default function drawCloudinessNode (cloudinessObj) {
  const cloudinessContainer = document.createElement('div')
  cloudinessContainer.classList.add('cloudiness-container')

  const icon = new Image()
  icon.src = Cloudiness

  const cloudiness = document.createElement('div')
  cloudiness.classList.add('cloudiness')
  cloudiness.textContent = `${cloudinessObj.cloudiness}%`

  cloudinessContainer.appendChild(icon)
  cloudinessContainer.appendChild(cloudiness)

  return cloudinessContainer
}
