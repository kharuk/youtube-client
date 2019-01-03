import insertVideo from './insertClip.js';
import getCurrentVideoCount from './getCurrentCountOfVideo.js';
import outputNumberOfPage from './outputNumberOfPage.js';
import  sendRequest from './getFetch.js';
import fetchInitialization from './fetchInitialization.js';

export default function outputVideo() {
    fetchInitialization.videoCount = getCurrentVideoCount();
    for(let i = 0; i < fetchInitialization.videoCount; i++){
        insertVideo(sendRequest.videoDescriptionArray[sendRequest.indexOfLeftVideo + i], sendRequest.videoInfoArray[sendRequest.indexOfLeftVideo + i]);
    }
    outputNumberOfPage();
}