// To handle the modal window
var closer = document.querySelector('.close')
closer.addEventListener('click', () => {
  var toBeClosed = document.querySelector('.modalWindow')
  toBeClosed.style.display = 'none'
})
