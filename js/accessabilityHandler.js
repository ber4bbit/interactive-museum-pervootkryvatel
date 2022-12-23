const accessabilityPanel = document.querySelector('.accessability-panel');
const accessabilityBtn = document.getElementById('accessabilityBtn');
const headerElement = document.querySelector('.header');
const textElements = document.querySelectorAll('p');
const fontSmallerBtn = document.getElementById('fontSmallerBtn');
const marqueeElements = document.querySelectorAll('.marquee3k');
const marqueeElementsArr = Array.from(marqueeElements);
const textElementsArr = Array.from(textElements).slice(4);

accessabilityBtn.addEventListener('click', () => {
    marqueeElementsArr.forEach(elem => {
        if (elem.getAttribute('paused') == undefined) {
            elem.setAttribute('paused', true);
            Marquee3k.pause(marqueeElementsArr.indexOf(elem));
        }
        else if (elem.getAttribute('paused') == 'true') {
            elem.setAttribute('paused', false);
            Marquee3k.play(marqueeElementsArr.indexOf(elem));
        }
        else if (elem.getAttribute('paused') == 'false') {
            elem.setAttribute('paused', true);
            Marquee3k.pause(marqueeElementsArr.indexOf(elem));
        }
        
    })
    accessabilityPanel.classList.toggle('accessability-panel_hidden');
    headerElement.classList.toggle('header__navigation_accessability-opened');

})



fontSmallerBtn.addEventListener('click', () => {
    textElementsArr.forEach(elem => {
        let intFontSize = Number((window.getComputedStyle(elem).fontSize).substring(0, window.getComputedStyle(elem).fontSize.length - 2))
        if (elem.style.fontSize = "''") elem.style.fontSize = `${intFontSize - 2}px`
        else if (elem.style.fontSize != "''") elem.style.fontSize = `${elem.style.fontSize - 2}px`
    })
})

fontBiggerBtn.addEventListener('click', () => {
    textElementsArr.forEach(elem => {
        let intFontSize = Number((window.getComputedStyle(elem).fontSize).substring(0, window.getComputedStyle(elem).fontSize.length - 2))
        if (elem.style.fontSize = "''") elem.style.fontSize = `${intFontSize + 2}px`
        else if (elem.style.fontSize != "''") elem.style.fontSize = `${elem.style.fontSize + 2}px`
    })
})