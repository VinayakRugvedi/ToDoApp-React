document.body.onload = playFunc
function playFunc () {
  responsiveVoice.speak("Hello Procrastinators, welcome to the secret diary of your dreams!", "UK English Male")
}

// To handle the modal window
var closer = document.querySelector('.close')
closer.addEventListener('click', () => {
  var toBeClosed = document.querySelector('.modalWindow')
  toBeClosed.style.display = 'none'
})
