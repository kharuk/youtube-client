import clearPageAndSendFetch from './fetchInitialization.js';

export default function insertSearchForm(mainInnerContainer) {
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    mainInnerContainer.className = 'main-inner-container';
    wrapper.appendChild(mainInnerContainer);
    mainInnerContainer.innerHTML = '<section class="search-field">' +
        '    <form class="search" autocomplete="off" name="search" method="post">' +
        '      <input class="input" type="search" id="searchKey" name="searchKey" placeholder="Search" />' +
        '      <button class="submit" type="submit" name="" value="">' +
        '      </button>' +
        '    </form>' +
        '</section>';
    const wrapperSection = document.querySelector('body');
    wrapperSection.appendChild(wrapper);
    document.querySelector('.search').onsubmit = () => clearPageAndSendFetch();
}