const buttonServices = document.querySelector ('.button-services')
const buttonHidden = document.querySelector ('.button-hidden')
const services = document.querySelector ('.services')
const arrow = document.querySelector ('.arrow')
buttonServices.onclick = function() {
	buttonServices.classList.toggle('hidden')
	services.classList.toggle('hidden')
	buttonHidden.classList.toggle('hidden')
	arrow.classList.toggle('transform')
	arrow.classList.toggle('transform-down')
}
buttonHidden.onclick = function() {
	buttonServices.classList.toggle('hidden')
	services.classList.toggle('hidden')
	buttonHidden.classList.toggle('hidden')
	arrow.classList.toggle('transform')
	arrow.classList.toggle('transform-down')
}
arrow.onclick = function() {
	buttonServices.classList.toggle('hidden')
	services.classList.toggle('hidden')
	buttonHidden.classList.toggle('hidden')
	arrow.classList.toggle('transform')
	arrow.classList.toggle('transform-down')
}