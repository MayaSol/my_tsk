import {LOCALE,DATE_OPTS} from './const.js';

export const getDateInputTmplt = (datePars = {placeholder: ''}) => {

  let dateStatus = 'no';
  let value = '';
  let disabled = 'disabled';

  if (typeof datePars.date !== 'undefined') {
    dateStatus= 'yes';
    value = datePars.date.toLocaleString(LOCALE, DATE_OPTS);
    disabled ='';
  }

  return (
    `<button class="card__date-deadline-toggle" type="button">
      date: <span class="card__date-status">${dateStatus}</span>
    </button>

    <fieldset class="card__date-deadline" ${disabled}>
      <label class="card__input-deadline-wrap">
        <input
          class="card__date"
          type="text"
          placeholder="${datePars.placeholder}"
          name="date"
          value="${value}"
        />
      </label>
    </fieldset>`
  );

};
