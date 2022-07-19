import {StyleSheet} from 'react-native';
import stylePrimary from './stylePrimary';

const styles = StyleSheet.create({
   container: {
      marginHorizontal: 30,
   },
   containerScreen: {
      backgroundColor: 'rgba(0,0,0,0.5)',
      flex: 1,
   },
   containerScreenForgotPassword: {
      backgroundColor: 'rgba(255,255,255,0.2)',
      flex: 1,
   },
   background: {
      flex: 1,
      backgroundColor: stylePrimary.background,
   },
   headerPage: {
      marginTop: 30,
      fontSize: 30,
      textAlign: 'center',
      fontWeight: '700',
   },
   imageBackground: {
      height: 300,
   },
   iconBack: {
      color: stylePrimary.mainColor,
      fontSize: 22,
      marginLeft: 20,
   },
   layoutBar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 40,
   },
   layoutList: {
      flexDirection: 'row',
      marginTop: 10,
      alignItems: 'center',
      width: '100%',
   },
   imageCategory: {
      width: 101,
      height: 88,
      borderRadius: 10,
      margin: 5,
   },
   layoutDetail: {
      marginRight: 20,
      width: '50%',
   },
   titleDetail: {
      fontSize: 12,
      fontWeight: '700',
   },
   additionalDetail: {
      fontSize: 9,
      color: 'gray',
   },
   titleArticle: {
      fontSize: 18,
      fontWeight: '700',
      marginTop: 20,
      marginBottom: 10,
   },
   descriptionDetail: {
      fontSize: 14,
   },
   layoutDetailAuthor: {
      flexDirection: 'row',
      marginBottom: 30,
   },
   textDetailAuthor: {
      fontSize: 10,
      color: 'gray',
   },
   textSource: {
      fontSize: 12,
      color: 'gray',
      fontWeight: '700',
      marginVertical: 30,
   },
});

export {styles};
