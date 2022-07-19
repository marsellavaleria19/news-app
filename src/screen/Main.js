/* eslint-disable react-hooks/exhaustive-deps */

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStackNav from '../router/MainNavigation';

const Main = () => {
   return (
      <NavigationContainer>
         <MainStackNav />
      </NavigationContainer>
   );
};

export default Main;
