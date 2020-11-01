import {getControlTmplt} from './view/getControlTmplt.js';
import {getFilterTmplt} from './view/getFilterTmplt.js';
import {getBoardTmplt} from './view/getBoardTmplt.js';


const render = (elem, template, position = 'beforeend') => {
  elem.insertAdjacentHTML(position, template);
}

const main = document.querySelector('.main');
const mainControl = document.querySelector('.main__control');

render(mainControl, getControlTmplt());
render(main, getFilterTmplt());
render(main, getBoardTmplt());
