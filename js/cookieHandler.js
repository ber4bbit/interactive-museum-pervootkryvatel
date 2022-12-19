const cookieBannerContainer = document.getElementById('cookieContainer');
const cookieAcceptBtn = document.querySelector('.cookie__btn');

if (Boolean(localStorage.getItem('cookieBannerHidden'))) {
    cookieBannerContainer.classList.toggle('cookie_hidden');
    cookieAcceptBtn.classList.toggle('cookie-btn_hidden');
}

cookieAcceptBtn.addEventListener('click', () => {
    localStorage.setItem('cookieBannerHidden', 'true');
    cookieBannerContainer.classList.toggle('cookie_hidden');
    cookieAcceptBtn.classList.toggle('cookie-btn_hidden');
})