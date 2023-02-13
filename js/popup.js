const openPopup = document.querySelector('.button-popup')
const closePopup = document.querySelector('.close-popup')
const Popupbg = document.querySelector('.popup-bg')
const body = document.querySelector('body')
openPopup.onclick = function () {
	Popupbg.classList.remove('hidden')
	body.classList.add('lock')
}
closePopup.onclick = function () {
	Popupbg.classList.add('hidden')
	body.classList.remove('lock')
}