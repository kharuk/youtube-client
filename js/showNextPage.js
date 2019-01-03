import sendRequest from "./getFetch.js";
import outputVideo from "./outputVideo.js";
import getCurrentVideoCount from './getCurrentCountOfVideo.js';

export default function showNextPage() {
    const countOfVideo = getCurrentVideoCount();
    let arrOfElement = document.querySelectorAll('.container');
    for (let i = 0; i < countOfVideo; i++){
        arrOfElement[i].remove();
    }
    sendRequest.indexOfLeftVideo += countOfVideo;
    (sendRequest.videoDescriptionArray.length - sendRequest.indexOfLeftVideo <= 2*countOfVideo) ?  sendRequest(sendRequest.pageToken) :  outputVideo();
}
