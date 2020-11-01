import {REPEAT_INPUTS} from './const.js';


const getRepeatItemTmplt = (label, isChecked = false, number = 1) => {
  if (!label) {
    return;
  }

  let checked = '';
  let id = `repeat-${label}-${number}`

  if (isChecked) {
    checked = 'checked';
  }

  return (
    `<input
      class="visually-hidden card__repeat-day-input"
      type="checkbox"
      id="${id}"
      name="repeat"
      value="${label}"
      ${checked}
    />
    <label class="card__repeat-day" for="${id}"
      >${label}</label
    >`
  );
}

export const getRepeatInputTmplt = (repeatTmplt = '0000000') => {

  const sum = repeatTmplt
    .split('')
    .reduce((arr,el) => {
      return parseInt(arr) + parseInt(el);
    },0)

  let isRepeat = 'no';
  let disabled = 'disabled';

  if (sum > 0) {
    isRepeat = 'yes';
    disabled = '';
  }

  const repeatInputs = REPEAT_INPUTS
    .reduce((result,label, i) => {
      return result + getRepeatItemTmplt(label, parseInt(repeatTmplt[i]), 1);
    },``);

  return (
    `<button class="card__repeat-toggle" type="button">
      repeat:<span class="card__repeat-status">${isRepeat}</span>
    </button>
    <fieldset class="card__repeat-days" ${disabled}>
      <div class="card__repeat-days-inner">
        ${repeatInputs}
      </div>
    </fieldset>`
  )
}
