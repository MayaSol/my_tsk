import {getClassList} from './utils.js';
import {LOCALE, DAY_OPTS, TIME_OPTS} from './const.js';

export const getTaskCardTmplt = (classList = {classes: ['black'], text: 'default text'}) => {
  const classes = getClassList(classList.classes,'card');

  let date = '';
  if (typeof classList.date !== 'undefined') {
    date = (
      `<div class="card__dates">
        <div class="card__date-deadline">
          <p class="card__input-deadline-wrap">
            <span class="card__date">${classList.date.toLocaleString(LOCALE, DAY_OPTS)}</span>
            <span class="card__time">${classList.date.toLocaleString(LOCALE, TIME_OPTS)}</span>
          </p>
        </div>
      </div>`
    );
  }

  return (
    `<article class="card ${classes}">
      <div class="card__form">
        <div class="card__inner">
          <div class="card__control">
            <button type="button" class="card__btn card__btn--edit">
              edit
            </button>
            <button type="button" class="card__btn card__btn--archive">
              archive
            </button>
            <button
              type="button"
              class="card__btn card__btn--favorites card__btn--disabled"
            >
              favorites
            </button>
          </div>

          <div class="card__color-bar">
            <svg class="card__color-bar-wave" width="100%" height="10">
              <use xlink:href="#wave"></use>
            </svg>
          </div>

          <div class="card__textarea-wrap">
            <p class="card__text">${classList.text}</p>
          </div>

          <div class="card__settings">
            <div class="card__details">
              ${date}
            </div>
          </div>
        </div>
      </div>
    </article>`
  );

}
