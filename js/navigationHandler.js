import sendRequest from "./getFetch.js";
import outputVideo from "./outputVideo.js";
import getCurrentVideoCount from './getCurrentCountOfVideo.js';

export default function showPrevPage(){
    const countOfVideo = getCurrentVideoCount();
    sendRequest.indexOfLeftVideo -= countOfVideo;
    if (sendRequest.indexOfLeftVideo >=0){

        let arrOfElement = document.querySelectorAll('.container');
        for (let i = 0; i < countOfVideo; i++){
            arrOfElement[i].remove();
        }

        outputVideo();
    }else{
        sendRequest.indexOfLeftVideo = 0;
        let arrOfElement = document.querySelectorAll('.container');
        for (let i = 0; i < countOfVideo; i++){
            arrOfElement[i].remove();
        }
        outputVideo();
    }
};