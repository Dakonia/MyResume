document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector('.slider');
    let currentSlide = 0;

    function showSlide() {
        currentSlide = (currentSlide + 1) % 2; 
        const transformValue = `translateX(-${currentSlide * 100}%)`;
        slider.style.transform = transformValue;
    }

    setInterval(showSlide, 3000);
});




document.addEventListener('DOMContentLoaded', function () {
    const contactInfos = document.querySelectorAll('.contact-info');
    contactInfos.forEach(contactInfo => {
        contactInfo.addEventListener('mouseover', showContactInfo);
        contactInfo.addEventListener('mouseout', hideContactInfo);
    });
});

function showContactInfo(event) {
    const contactInfo = event.currentTarget;
    const infoPopup = createInfoPopup(contactInfo.dataset.info);
    contactInfo.appendChild(infoPopup);

    contactInfo.classList.add('active');
}

function hideContactInfo(event) {
    const contactInfo = event.currentTarget;
    const infoPopup = contactInfo.querySelector('.info-popup');

    if (infoPopup) {
        contactInfo.removeChild(infoPopup);
    }

    contactInfo.classList.remove('active');
}

function createInfoPopup(info) {
    const infoPopup = document.createElement('div');
    infoPopup.className = 'info-popup';
    infoPopup.innerHTML = `<p>${info}</p>`;
    return infoPopup;
}