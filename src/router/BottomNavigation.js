import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import stylePrimary from '../assets/styles/stylePrimary';
import {StyleSheet} from 'react-native';
import ListTechnology from '../screen/technology/ListTechnology';
import ListMedical from '../screen/medical/ListMedical';

const NavBottomTabStack = createBottomTabNavigator();

const BottomTabNav = () => {
   const Icon = ({iconType, name, active, ...props}) => {
      let IconFamily;
      let style;
      if (iconType == 'MaterialIcons') {
         IconFamily = MaterialIcon;
      }

      if (active) {
         style = addStyles.iconStyleFocused;
      } else {
         style = addStyles.iconStyle;
      }
      return <IconFamily name={name} style={style} {...props} />;
   };

   return (
      <NavBottomTabStack.Navigator
         screenOptions={{headerShown: false, tabBarShowLabel: false}}>
         <NavBottomTabStack.Screen
            name="TechnologyList"
            options={{
               tabBarStyle: addStyles.layoutHeader,
               title: 'Teknologi',
               tabBarIcon: ({focused, color, size}) => {
                  return (
                     <Icon
                        iconType="MaterialIcons"
                        name="computer"
                        active={focused}
                     />
                  );
               },
            }}
            component={ListTechnology}
         />
         <NavBottomTabStack.Screen
            name="MedicalList"
            options={{
               tabBarStyle: addStyles.layoutHeader,
               title: 'Kesehatan',
               tabBarIcon: ({focused, color, size}) => {
                  return (
                     <Icon
                        iconType="MaterialIcons"
                        name="medical-services"
                        active={focused}
                     />
                  );
               },
            }}
            component={ListMedical}
         />
      </NavBottomTabStack.Navigator>
   );
};

const addStyles = StyleSheet.create({
   layoutHeader: {
      backgroundColor: stylePrimary.mainColor,
      height: 60,
   },
   iconStyle: {
      color: stylePrimary.secondaryColor,
      fontSize: 30,
   },
   iconStyleFocused: {
      backgroundColor: stylePrimary.secondaryColor,
      color: stylePrimary.mainColor,
      fontSize: 30,
      paddingHorizontal: 10,
      paddingVertical: 8,
      borderRadius: 5,
   },
});

export {addStyles};

export default BottomTabNav;
