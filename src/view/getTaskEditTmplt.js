import {getClassList} from './utils.js';
import {getDateInputTmplt} from './getDateInputTmplt.js';
import {getRepeatInputTmplt} from './getRepeatInputTmplt.js';


export const getTaskEditTmplt = (classList = {classes: ['black'], text: 'This is example of new task, you can set date and time.'}) => {
  const classes = getClassList(classList.classes, 'card');

                // ${getDateInputTmplt({date: new Date(2020, 10, 8, 16, 5)})}
  return (
    `<article class="card card--edit ${classes}">
      <form class="card__form" method="get">
        <div class="card__inner">
          <div class="card__color-bar">
            <svg width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <label>
              <textarea
                class="card__text"
                placeholder="Start typing your text here..."
                name="text"
              >This is example of new task, you can set date and time.</textarea>
            </label>
          </div>

          <div class="card__settings">
            <div class="card__details">
              <div class="card__dates">
                ${getDateInputTmplt({date: new Date(2020, 10, 8, 16, 5)})}

                ${getRepeatInputTmplt('1001001')}
              </div>
            </div>

            <div class="card__colors-inner">
              <h3 class="card__colors-title">Color</h3>
              <div class="card__colors-wrap">
                <input
                  type="radio"
                  id="color-black-1"
                  class="card__color-input card__color-input--black visually-hidden"
                  name="color"
                  value="black"
                  checked
                />
                <label
                  for="color-black-1"
                  class="card__color card__color--black"
                  >black</label
                >
                <input
                  type="radio"
                  id="color-yellow-1"
                  class="card__color-input card__color-input--yellow visually-hidden"
                  name="color"
                  value="yellow"
                />
                <label
                  for="color-yellow-1"
                  class="card__color card__color--yellow"
                  >yellow</label
                >
                <input
                  type="radio"
                  id="color-blue-1"
                  class="card__color-input card__color-input--blue visually-hidden"
                  name="color"
                  value="blue"
                />
                <label
                  for="color-blue-1"
                  class="card__color card__color--blue"
                  >blue</label
                >
                <input
                  type="radio"
                  id="color-green-1"
                  class="card__color-input card__color-input--green visually-hidden"
                  name="color"
                  value="green"
                />
                <label
                  for="color-green-1"
                  class="card__color card__color--green"
                  >green</label
                >
                <input
                  type="radio"
                  id="color-pink-1"
                  class="card__color-input card__color-input--pink visually-hidden"
                  name="color"
                  value="pink"
                />
                <label
                  for="color-pink-1"
                  class="card__color card__color--pink"
                  >pink</label
                >
              </div>
            </div>
          </div>

          <div class="card__status-btns">
            <button class="card__save" type="submit">save</button>
            <button class="card__delete" type="button">delete</button>
          </div>
        </div>
      </form>
    </article>`
  );
}
