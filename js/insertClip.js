export default function insertVideo(generalInfo, countOfView) {
    const videoSection = document.querySelector('.content-slider');

    const videoBox = document.createElement('div');
    videoBox.className = 'container';

    const innerContainer = document.createElement('div');
    innerContainer.className = 'inner-container';
    videoBox.appendChild(innerContainer);

    const image = document.createElement('div');
    image.className = 'image-container';
    const videoUrl = generalInfo.snippet.thumbnails.medium.url;
    image.style.backgroundImage = "url("+videoUrl+")";
    innerContainer.appendChild(image);

    const linkVideo = document.createElement('a');
    linkVideo.className = 'link-text';
    linkVideo.href = `https://www.youtube.com/watch?v=${generalInfo.id.videoId}`;
    linkVideo.target = '_blank';
    image.appendChild(linkVideo);

    const nameVideo = document.createElement('span');
    nameVideo.className = 'name-video';
    nameVideo.textContent = generalInfo.snippet.title;
    linkVideo.appendChild(nameVideo);

    const infoContainer = document.createElement('div');
    infoContainer.className = 'info';
    innerContainer.appendChild(infoContainer);

    const infoList = document.createElement('ul');
    infoList.className = 'info-list';
    infoContainer.appendChild(infoList);

    const firstElementList = document.createElement('li');
    firstElementList.className = 'element-list';
    infoList.appendChild(firstElementList);

    const secondElementList = document.createElement('li');
    secondElementList.className = 'element-list';
    infoList.appendChild(secondElementList);

    const thirdElementList = document.createElement('li');
    thirdElementList.className = 'element-list';
    infoList.appendChild(thirdElementList);

    const spanIconAuthor = document.createElement('span');
    spanIconAuthor.className = 'icon';
    firstElementList.appendChild(spanIconAuthor);

    const iconAuthor = document.createElement('i');
    iconAuthor.className = 'fa fa-user';
    spanIconAuthor.appendChild(iconAuthor);

    const nameAuthor = document.createElement('span');
    nameAuthor.className = 'element';
    nameAuthor.textContent =  generalInfo.snippet.channelTitle;
    firstElementList.appendChild(nameAuthor);

    const spanIconDate = document.createElement('span');
    spanIconDate.className = 'icon';
    secondElementList.appendChild(spanIconDate);

    const iconDate = document.createElement('i');
    iconDate.className = 'fa fa-calendar';
    spanIconDate.appendChild(iconDate);

    const date = document.createElement('span');
    date.className = 'element';
    date.textContent = generalInfo.snippet.publishedAt.substr(0, 10);
    secondElementList.appendChild(date);

    const spanIconView = document.createElement('span');
    spanIconView.className = 'icon';
    thirdElementList.appendChild(spanIconView);

    const iconView = document.createElement('i');
    iconView.className = 'fa fa-eye';
    spanIconView.appendChild(iconView);

    const view = document.createElement('span');
    view.className = 'element';
    view.textContent = countOfView.statistics.viewCount;
    thirdElementList.appendChild(view);

    const descriptionVideo = document.createElement('p');
    descriptionVideo.className = 'cope-text';
    descriptionVideo.textContent = generalInfo.snippet.description;
    innerContainer.appendChild(descriptionVideo);

    videoSection.appendChild(videoBox);
}