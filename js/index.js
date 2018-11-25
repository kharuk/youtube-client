//import '../style/css.css';
//import '../style/reset.css';
import insertSearchForm from '../js/insertSearchForm.js';
import insertVideoSection from '../js/insertVideoSection.js';
import insertDots from './insertNavigationDots.js';
import onResizeWindow from './onResizeWindow.js';

const mainInnerContainer = document.createElement('div');
insertSearchForm(mainInnerContainer);
insertVideoSection(mainInnerContainer);
insertDots(mainInnerContainer);

window.onresize = () => onResizeWindow();