import outputVideo from './outputVideo.js';

export default function sendRequest(pageToken) {
    event.preventDefault();
    document.querySelector('.content-slider').innerHTML = '';

    const inputQuery = document.getElementById('searchKey').value;
    if (inputQuery.replace(/\s/g, '') !== '') {
        const apiKey = 'AIzaSyBQfk5quGb0LjS5XGTK5XU9dliPF33IjiM';
        let fetchRequest;
        if (pageToken !== '') {
            fetchRequest = `https://www.googleapis.com/youtube/v3/search?pageToken=${pageToken}&type=video&part=snippet&maxResults=15&order=relevance&key=${apiKey}&q=${inputQuery}`;
        }
        else {
            sendRequest.videoDescriptionArray = [];
            sendRequest.videoInfoArray = [];
            sendRequest.indexOfLeftVideo = 0;
            fetchRequest = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=15&type=video&order=relevance&key=${apiKey}&q=${inputQuery}`
        }

        fetch(fetchRequest)
            .then(response => {
                if (response.status !== 200) {
                    console.log(`Sorry, there was a problem. Status: ${
                        response.status}`);
                    return;
                }
                return response.text()
            })
            .then(text => text.length ? JSON.parse(text) : {})
            .then(data => {
                sendRequest.pageToken  = data.nextPageToken;
                let idVideo = '';
                data.items.forEach((item) => {
                    sendRequest.videoDescriptionArray.push(item);
                    idVideo += `${item.id.videoId},`;
                });
                fetch(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${idVideo}&key=${apiKey}`)
                    .then(response => {
                        if (response.status !== 200) {
                            console.log(`Sorry, there was a problem. Status: ${
                                response.status}`);
                            return;
                        }
                        return response.text()
                    })
                    .then(text => text.length ? JSON.parse(text) : {})
                    .then(data => {
                        data.items.forEach((item) => {
                            sendRequest.videoInfoArray.push(item);
                        });
                        outputVideo(sendRequest.videoDescriptionArray,sendRequest.videoInfoArray, sendRequest.indexOfLeftVideo);
                    });
            })
            .catch((error) => console.log(error));
    }
};