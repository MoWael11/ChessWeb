window.addEventListener('load', () => {
  const buttonPlay = document.getElementById('play')
  const platform = document.getElementById('platform')
  buttonPlay.addEventListener('click', () => {
    buttonPlay.classList.toggle('pause-animation')
    platform.classList.toggle('open-platforms')
  })
})