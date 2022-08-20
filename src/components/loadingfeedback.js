export default function drawLoadingFeedback () {
  const feedback = document.createElement('div')
  feedback.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'
  feedback.style.height = '100%'
  feedback.style.width = '100%'
  feedback.style.position = 'absolute'
  feedback.style.top = '0'
  feedback.style.left = '0'
  feedback.style.display = 'flex'
  feedback.style.justifyContent = 'center'
  feedback.style.alignItems = 'center'

  const loading = document.createElement('div')
  loading.textContent = 'Loading...'
  loading.style.fontSize = '3rem'
  feedback.appendChild(loading)

  return feedback
}
