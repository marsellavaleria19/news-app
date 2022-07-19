import axios from 'axios';

export const getListMedical = () => {
   return {
      type: 'GET_MEDICAL',
      payload: axios.get(
         'https://raw.githubusercontent.com/damaryosaaji/freeapi/main/health.json',
      ),
   };
};

export const saveDetailMedical = item => {
   return {
      type: 'SAVE_DETAIL_MEDICAL',
      payload: item,
   };
};
