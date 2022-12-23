document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth <= 1024) document.querySelector('.main__description-background').setAttribute('src', './assets/images/main__description-background_mobile.png');
    if (window.innerWidth <= 500) document.querySelector('.header__background').setAttribute('src', './assets/images/header-mobile-bg.png');
    if (window.innerWidth >= 1024) document.querySelector('.main__description-background').setAttribute('src', './assets/images/mobile-desc-bg.png');
    else if (window.innerWidth > 500) {
        document.querySelector('.header__background').setAttribute('src', './assets/images/header-bg.png');
    }
});


window.addEventListener('resize', () => {
    if (window.innerWidth <= 1024) document.querySelector('.main__description-background').setAttribute('src', './assets/images/main__description-background_mobile.png');
    if (window.innerWidth <= 500) document.querySelector('.header__background').setAttribute('src', './assets/images/header-mobile-bg.png');
    if (window.innerWidth >= 1024) document.querySelector('.main__description-background').setAttribute('src', './assets/images/mobile-desc-bg.png');
    else if (window.innerWidth > 500) {
        document.querySelector('.header__background').setAttribute('src', './assets/images/header-bg.png');
    }
})




