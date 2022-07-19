import * as React from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {styles} from '../assets/styles/styles';
import moment from 'moment';

const List = ({title, path, date, source, navigate, children}) => {
   return (
      <View>
         <TouchableOpacity onPress={navigate}>
            <View style={styles.layoutList}>
               <View style={styles.layoutDetail}>
                  <Text style={styles.additionalDetail}>
                     {moment(date).format('DD MMM YYYY')}
                  </Text>
                  <Text style={styles.titleDetail}>{title}</Text>
                  <Text style={styles.additionalDetail}>{source}</Text>
               </View>
               <View style={styles.layoutImageRating}>
                  <Image source={path} style={styles.imageCategory} />
               </View>
            </View>
         </TouchableOpacity>
      </View>
   );
};

export default List;
