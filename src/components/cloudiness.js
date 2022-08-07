/**
 * This component draws a div for the cloudiness information.
 */
export default function drawCloudinessNode (cloudinessObj) {
  const cloudinessContainer = document.createElement('div')
  cloudinessContainer.classList.add('cloudiness-container')

  const cloudiness = document.createElement('div')
  cloudiness.classList.add('cloudiness')
  cloudiness.textContent = cloudinessObj.cloudiness

  cloudinessContainer.appendChild(cloudiness)

  return cloudinessContainer
}
