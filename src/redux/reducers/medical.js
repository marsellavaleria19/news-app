const dataMedical = {
   listMedical: [],
   dataMedical: null,
   isLoading: false,
   isError: false,
};

const medical = (state = dataMedical, action) => {
   switch (action.type) {
      case 'GET_MEDICAL_PENDING': {
         state.isLoading = true;
         return {...state};
      }
      case 'GET_MEDICAL_FULFILLED': {
         const {data} = action.payload;
         state.listMedical = data.articles;
         state.isLoading = false;
         return {...state};
      }
      case 'GET_MEDICAL_REJECTED': {
         state.isLoading = false;
         state.isError = true;
         return {...state};
      }
      case 'SAVE_DETAIL_MEDICAL': {
         state.dataMedical = action.payload;
         state.isLoading = false;
         return {...state};
      }
      default: {
         return {...state};
      }
   }
};

export default medical;
