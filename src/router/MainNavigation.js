import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import DetailTechnology from '../screen/technology/DetailTechnology';
import DetailMedical from '../screen/medical/DetailMedical';
import BottomTabNav from './BottomNavigation';
import {stylePrimary} from '../assets/styles/stylePrimary';

const NavMainStack = createNativeStackNavigator();

const MainStackNav = () => {
   return (
      <NavMainStack.Navigator>
         <NavMainStack.Screen
            options={{headerShown: false}}
            name="BottomNav"
            component={BottomTabNav}
         />
         <NavMainStack.Screen
            options={{headerShown: false}}
            name="DetailTechnology"
            component={DetailTechnology}
         />
         <NavMainStack.Screen
            options={{headerShown: false}}
            name="DetailMedical"
            component={DetailMedical}
         />
      </NavMainStack.Navigator>
   );
};

export default MainStackNav;
