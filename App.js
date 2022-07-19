import React from 'react';
import Main from './src/screen/Main';
import {Provider} from 'react-redux';
import ReduxStore from './src/redux/store';

const App = () => {
   const {store} = ReduxStore();
   return (
      <>
         <Provider store={store}>
            <Main />
         </Provider>
      </>
   );
};

export default App;
