const buttonOpen = document.querySelector('.header__hamburger');
const menuOpen = document.querySelector('.header__car');
const link = document.querySelectorAll(".btn");
const popup = document.querySelector(".feedback");
const close = document.querySelector(".feedback__close");

buttonOpen.addEventListener('click', function () {
    buttonOpen.classList.toggle('header__hamburger-closed');
    menuOpen.classList.toggle('header__car-show');
});

for (let i = 0; i < link.length; i++) {

    link[i].addEventListener('click', function(){
        popup.classList.toggle("feedback__show");
    });
}

close.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.remove("feedback__show");
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popup.classList.contains("feedback__show")) {
            popup.classList.remove("feedback__show");
        }
    }
});