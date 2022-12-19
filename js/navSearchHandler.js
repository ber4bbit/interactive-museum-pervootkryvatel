const searchElement = document.querySelector('.header__navigation-item_search');

searchElement.addEventListener('click', () => {
    searchElement.classList.toggle('header__navigation-item_search-active');
    searchElement.parentNode.classList.toggle('header__navigation-contacts_search-active');
    searchElement.hasAttribute('readonly')
        ? searchElement.removeAttribute('readonly')
        : (
            searchElement.setAttribute('readonly', true),
            searchElement.value = ''
            )
    
})