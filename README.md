# youtube-client

Perfect for latest Chrome;

Support at least one mobile browser;

https://kharuk.github.io/youtube-client/

# YouTube client

### Task:
The task is to create a web app to view information about youtube clips by user request.
YouTube REST API should be accessed via cross-domain XHR requests.

### Use case:
1. Search box is viewed by the user when he starts the app.
2. The user inputs a request in the search box. e.g. - javascript  
3. The app processes the request to YouTube REST API and displays loaded clips in form of horisontal list.
4. The horisontal list can be scrolled with a swipe (on a desktop via mouse swipe). Swipe should be animated, e.g. user can click and pull the list sidewise. Paging event should be triggered when mouseUp is released. If a user makes X quick swipes the app should list X pages. The number of clips on a page depends on the page size (from 1 to 4 clips per page).      
5. The additional navigation buttons (paging control) are set on the bottom of the page.  
6. As listing the pages, the app should load new data by chunks ( 15 clips per chunk). It would be good to manage "smooth" data loading which means preloading data chunks in advance to emulate infinite scrolling experience.

### Requirements
1. Perfect for latest Chrome;
2. Support at least one mobile browser(e.g. iOS / Android / WP);
3. Clips (aka components) are listed pagely. Resizing the page increases/decreases the number of clips on a page. After a resize event the first left clip from previous state should presented on a new state (but its position can be different). The futher resizing would take into account the first left component from the new state.
4. During a mousedown event on a paging component the tooltip with page number should popup.
5. Your complete app should be uploaded to github pages (gh-pages branch) or to any other hosting.
6. Each clip-component should provide for information about a single YouTube clip. Minimal info:
    - title (clickable link to YouTube)
    - clip preview as a picture
    - description
    - author
    - publication date
    - view rate (count)

    Showing the other information is optional.
    
## Source code requirements 
- HTML rendering via JavaScript (a page is loaded without html tags inside document.body);
- CSS preprocessors can be used; 
- CSS3 Animations with Transitions & Transforms;
- Use of jQuery and other frameworks and libs **is forbidden** (except for https://lodash.com/);
- `.editorconfig` is required
- `eslint` is required
- `eslint-config-airbnb-base` is required
-  JS code should be splitted in modules and assembled by Webpack. Usage of babel and babel-loader is required. 
