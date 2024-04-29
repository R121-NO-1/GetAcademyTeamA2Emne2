const showPopup = document.querySelector('.show-popup');
const popupContainer = document.querySelector('.popup-container');
const closebtn = document.querySelector('.closebtn');

showPopup.onclick = () => {
    popupContainer.classList.add('active');

}

closebtn.onclick = () => {
    popupContainer.classList.remove('active')
}
