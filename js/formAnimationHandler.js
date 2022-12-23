const formSection = document.getElementById('feedBackForm');
const formOverlay = document.querySelector('.feedBack-overlay');
const partnersSection = document.querySelector('.partners');


// window.onscroll = () => console.log(formSection.offsetTop);

document.addEventListener("DOMContentLoaded", () => {
    
        window.addEventListener('scroll', () => {
            if (window.innerWidth <= 500) {
                if (window.pageYOffset >= (partnersSection.offsetTop - partnersSection.clientHeight) + (partnersSection.clientHeight / 1)) formOverlay.classList.add('feedBack-overlay_showed');
                else if (window.pageYOffset < (partnersSection.offsetTop - partnersSection.clientHeight) + (partnersSection.clientHeight / 1)) formOverlay.classList.remove('feedBack-overlay_showed');
            } else if (window.innerWidth > 500) { 
                if (window.pageYOffset >= (partnersSection.offsetTop - partnersSection.clientHeight) + (partnersSection.clientHeight / 2)) formOverlay.classList.add('feedBack-overlay_showed');
                else if (window.pageYOffset < (partnersSection.offsetTop - partnersSection.clientHeight) + (partnersSection.clientHeight / 2)) formOverlay.classList.remove('feedBack-overlay_showed');
            }
            
        })
})

window.addEventListener('resize', () => {
    window.addEventListener('scroll', () => {
        if (window.innerWidth <= 500) {
            if (window.pageYOffset >= (partnersSection.offsetTop - partnersSection.clientHeight) + (partnersSection.clientHeight / 1)) formOverlay.classList.add('feedBack-overlay_showed');
            else if (window.pageYOffset < (partnersSection.offsetTop - partnersSection.clientHeight) + (partnersSection.clientHeight / 1)) formOverlay.classList.remove('feedBack-overlay_showed');
        } else if (window.innerWidth > 500) { 
            if (window.pageYOffset >= (partnersSection.offsetTop - partnersSection.clientHeight) + (partnersSection.clientHeight / 2)) formOverlay.classList.add('feedBack-overlay_showed');
            else if (window.pageYOffset < (partnersSection.offsetTop - partnersSection.clientHeight) + (partnersSection.clientHeight / 2) ) formOverlay.classList.remove('feedBack-overlay_showed');
        }
    })
})


