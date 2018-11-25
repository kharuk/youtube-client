import sendRequest from './getFetch.js';
import getCurrentVideoCount from './getCurrentCountOfVideo.js';

export default function fetchInitialization() {
    let nextPageToken = '';
    let videoDescriptionArray = [];
    let videoInfoArray = [];
    let indexOfLeftVideo = 0;
    let videoCount = getCurrentVideoCount();
    sendRequest(nextPageToken);
}
