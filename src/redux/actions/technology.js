import axios from 'axios';

export const getListTechnology = () => {
   return {
      type: 'GET_TECHNOLOGY',
      payload: axios.get(
         'https://raw.githubusercontent.com/damaryosaaji/freeapi/main/tech.json',
      ),
   };
};

export const saveDetailTechnology = item => {
   return {
      type: 'SAVE_DETAIL_TECHNOLOGY',
      payload: item,
   };
};
