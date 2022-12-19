document.querySelector('.navigation-menu__burger').addEventListener('click', () => {
    document.querySelector('.navigation-menu__burger').classList.toggle('opened');
    document.querySelectorAll('.header__navigation-item')[0].classList.toggle('header__navigation-item_burger');
    document.querySelector('.navigation-menu__burger-list').classList.toggle('navigation-menu__burger-list_visible');
})

document.querySelectorAll('.burger-list__item').forEach(item => {
    item.addEventListener('click', () => {
        document.querySelector('.navigation-menu__burger').classList.toggle('opened');
        document.querySelectorAll('.header__navigation-item')[0].classList.toggle('header__navigation-item_burger');
        document.querySelector('.navigation-menu__burger-list').classList.toggle('navigation-menu__burger-list_visible');
    })
})