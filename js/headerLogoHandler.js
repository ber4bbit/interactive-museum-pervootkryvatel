const headerLogoElement = document.querySelector('.navigation-logo');

window.addEventListener('scroll', () => {
    if (window.pageYOffset < 50) headerLogoElement.classList.remove('navigation-logo_hidden')
    else if (window.pageYOffset > 50) headerLogoElement.classList.add('navigation-logo_hidden')
})