import swipeStart from './swipeHandler.js';

export default function insertVideoSection(mainInnerContainer) {
    const videoSection = document.createElement('section');
    videoSection.className = 'video-section';
    videoSection.id = 'videoSection';
    mainInnerContainer.appendChild(videoSection);
    const slider = document.createElement('div');
    slider.classList.add('content-slider', '-animated');
    slider.style.left = '0';

    videoSection.appendChild(slider);
    videoSection.addEventListener('mousedown', swipeStart, false);
    videoSection.addEventListener('touchstart', swipeStart, false);

}