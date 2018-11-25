import getCurrentVideoCount from './getCurrentCountOfVideo.js';
import sendRequest from "./getFetch.js";

export default function outputNumberOfPage() {
    const dots = document.querySelectorAll('.button');
    const videoCount = getCurrentVideoCount();
    const num = Math.ceil(sendRequest.indexOfLeftVideo/videoCount);
    if (sendRequest.indexOfLeftVideo !== 0){
        if (sendRequest.indexOfLeftVideo >= sendRequest.videoInfoArray.length - videoCount){
            dots[0].innerHTML = '';
            dots[1].innerHTML = '';
            dots[2].innerHTML = num + 1;
        }else {
            dots[0].innerHTML = '';
            dots[1].innerHTML = num + 1;
            dots[2].innerHTML = '';
        }
    } else{
        dots[0].innerText = num + 1;
        dots[1].innerHTML = '';
        dots[2].innerHTML = '';
    }
}





























