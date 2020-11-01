import {getBoardFilterTmplt} from './getBoardFilterTmplt.js';
import {getTaskListTmplt} from './getTaskListTmplt.js';
import {getBtnMoreTmplt} from './getBtnMoreTmplt.js';

export const getBoardTmplt = () => {
  return (
    `<section class="board container">
      ${getBoardFilterTmplt()}
      <div class="board__tasks">
        ${getTaskListTmplt()}
      </div>
      ${getBtnMoreTmplt()}
    </section>`
  );
}
