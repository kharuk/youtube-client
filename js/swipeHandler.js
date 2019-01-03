import showNextPage from './showNextPage.js'
import showPrevPage from './navigationHandler.js'

function handleSwipeMove(e) {
    const slider = document.querySelector('.content-slider');
    const clientX = e.clientX || e.changedTouches[0].clientX;
    let left = handleSwipeMove.left + (clientX - handleSwipeMove.startX);

    if (left > 200) left = 200;
    slider.style.left = `${left}px`;
}

function handleSwipeEnd(e) {
    const slider = document.querySelector('.content-slider');
    const width = document.querySelector('.video-section').clientWidth;
    const left = parseInt(slider.style.left, 10);
    const endX = e.clientX || e.changedTouches[0].clientX;

    slider.classList.add('-animated');
    document.removeEventListener('mousemove', handleSwipeEnd.func, false);
    document.removeEventListener('mouseup', handleSwipeEnd, false);
    document.removeEventListener('touchmove', handleSwipeEnd.func, false);
    document.removeEventListener('touchend', handleSwipeEnd, false);

    if (left > 0) slider.style.left = '0px';

    if (endX - handleSwipeEnd.startX < 0){

        slider.style.left = `-${(Math.floor(Math.abs(left) / width) + 1) * width}px`;
        showNextPage();
        slider.style.left = '0px';
    }
    else if (endX - handleSwipeEnd.startX > 0){
        slider.style.left = `-${(Math.floor(Math.abs(left) / width)) * width}px`;

        showPrevPage();
        slider.style.left = '0px';


    }
}

export default function swipeStart(e){
    if (e.button === 0 || e.type === 'touchstart') {
        const slider = document.querySelector('.content-slider');
        const left = parseInt(slider.style.left, 10);

        slider.classList.remove('-animated');
        handleSwipeMove.startX = e.clientX || e.changedTouches[0].clientX;
        handleSwipeMove.left = left;
        handleSwipeEnd.func = handleSwipeMove;
        handleSwipeEnd.startX = e.clientX || e.changedTouches[0].clientX;

        document.addEventListener('mousemove', handleSwipeMove, false);
        document.addEventListener('mouseup', handleSwipeEnd, false);
        document.addEventListener('touchmove', handleSwipeMove, false);
        document.addEventListener('touchend', handleSwipeEnd, false);
    }
}
