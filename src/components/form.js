/**
 * This component draws a form for users to input their location.
 */
import Magnify from '../static/magnify.png'

export default function drawLocationForm () {
  const form = document.createElement('form')
  form.classList.add('location-form')

  const locationInput = document.createElement('input')
  locationInput.setAttribute('type', 'text')
  locationInput.setAttribute('placeholder', 'Your city')

  const submitButton = document.createElement('button')
  submitButton.setAttribute('type', 'button')
  const submitButtonImg = new Image()
  submitButtonImg.src = Magnify
  submitButton.appendChild(submitButtonImg)

  form.appendChild(locationInput)
  form.appendChild(submitButton)

  return form
}
