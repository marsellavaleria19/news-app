const dataTechnology = {
   listTechnology: [],
   dataTechnology: null,
   isLoading: false,
   isError: false,
};

const technology = (state = dataTechnology, action) => {
   switch (action.type) {
      case 'GET_TECHNOLOGY_PENDING': {
         state.isLoading = true;
         return {...state};
      }
      case 'GET_TECHNOLOGY_FULFILLED': {
         const {data} = action.payload;
         state.listTechnology = data.articles;
         state.isLoading = false;
         return {...state};
      }
      case 'GET_TECHNOLOGY_REJECTED': {
         state.isLoading = false;
         state.isError = true;
         return {...state};
      }
      case 'SAVE_DETAIL_TECHNOLOGY': {
         state.dataTechnology = action.payload;
         state.isLoading = false;
         return {...state};
      }
      default: {
         return {...state};
      }
   }
};

export default technology;
