# youtube-client

Perfect for latest Chrome;

Support at least one mobile browser;

https://kharuk.github.io/youtube-client/

YouTube client
Task:

The task is to create a web app to view information about youtube clips by user request. YouTube REST API should be accessed via cross-domain XHR requests.
Use case:

    Search box is viewed by the user when he starts the app.
    The user inputs a request in the search box. e.g. - javascript
    The app processes the request to YouTube REST API and displays loaded clips in form of horisontal list.
    The horisontal list can be scrolled with a swipe (on a desktop via mouse swipe). Swipe should be animated, e.g. user can click and pull the list sidewise. Paging event should be triggered when mouseUp is released. If a user makes X quick swipes the app should list X pages. The number of clips on a page depends on the page size (from 1 to 4 clips per page).
    The additional navigation buttons (paging control) are set on the bottom of the page.
    As listing the pages, the app should load new data by chunks ( 15 clips per chunk). It would be good to manage "smooth" data loading which means preloading data chunks in advance to emulate infinite scrolling experience.

Requirements

    Perfect for latest Chrome;

    Support at least one mobile browser(e.g. iOS / Android / WP);

    Clips (aka components) are listed pagely. Resizing the page increases/decreases the number of clips on a page. After a resize event the first left clip from previous state should presented on a new state (but its position can be different). The futher resizing would take into account the first left component from the new state.

    During a mousedown event on a paging component the tooltip with page number should popup.

    Your complete app should be uploaded to github pages (gh-pages branch) or to any other hosting.

    Each clip-component should provide for information about a single YouTube clip. Minimal info:
        title (clickable link to YouTube)
        clip preview as a picture
        description
        author
        publication date
        view rate (count)

    Showing the other information is optional.

