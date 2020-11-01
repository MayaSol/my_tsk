import {CARDS} from './const.js';
import {getTaskCardTmplt} from './getTaskCardTmplt.js';
import {getTaskEditTmplt} from './getTaskEditTmplt.js';


export const getTaskListTmplt = () => {
  const cards = CARDS
    .reduce((cards,data) => {
        return cards + `${getTaskCardTmplt(data)}`;
    },``)

  return (
   `${getTaskEditTmplt()}
    ${cards}`
  );
}
