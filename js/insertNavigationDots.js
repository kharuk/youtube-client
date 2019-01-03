import showNextPage from './showNextPage.js'
import showPrevPage from './navigationHandler.js'

export default function insertDots(mainInnerContainer) {
    const buttons = document.createElement('section');
    buttons.className = 'buttons-section';
    buttons.innerHTML = '<div class="button"><span></span></div>\n' +
        '            <div class="button"><span></span></div>\n' +
        '            <div class="button"><span></span></div>';

    mainInnerContainer.appendChild(buttons);
    let dots = document.querySelectorAll('.button');
    dots[2].onclick = () => showNextPage();
    dots[0].onclick = () => showPrevPage();
}