import React, {useState} from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Container from '../../components/Container';
import {
   View,
   Text,
   ScrollView,
   ImageBackground,
   TouchableOpacity,
} from 'react-native';
import {styles} from '../../assets/styles/styles';
import IconLeft from 'react-native-vector-icons/FontAwesome';
import imageBackground from '../../assets/images/image-item.png';
import moment from 'moment';

const DetailMedical = ({navigation}) => {
   const {medical} = useSelector(state => state);
   const [picture, setPicture] = useState();

   useEffect(() => {
      setPicture(
         medical.dataMedical !== null && medical.dataMedical.urlToImage !== null
            ? {uri: `${medical.dataMedical.urlToImage}`}
            : imageBackground,
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, []);

   return (
      <View style={styles.background}>
         <ScrollView>
            <View>
               <ImageBackground
                  source={picture}
                  resizeMode="cover"
                  style={styles.imageBackground}>
                  <Container>
                     <View style={styles.layoutBar}>
                        <TouchableOpacity
                           onPress={() => navigation.goBack()}
                           style={styles.layoutBack}>
                           <IconLeft
                              name="chevron-left"
                              style={styles.iconBack}
                           />
                        </TouchableOpacity>
                     </View>
                  </Container>
               </ImageBackground>
            </View>
            <Container>
               <Text style={styles.titleArticle}>
                  {medical.dataMedical.title}
               </Text>
               <View style={styles.layoutDetailAuthor}>
                  <Text style={styles.textDetailAuthor}>
                     {medical.dataMedical.author !== null
                        ? `${medical.dataMedical.author} | ${moment(
                             medical.dataMedical.publishedAt,
                          ).format('DD MMM YYYY | hh:mm')}`
                        : moment(medical.dataMedical.publishedAt).format(
                             'DD MMM YYYY | hh:mm',
                          )}
                  </Text>
               </View>
               <Text style={styles.descriptionDetail}>
                  {medical.dataMedical.content !== null
                     ? medical.dataMedical.content
                     : 'No Content'}
               </Text>
               <Text style={styles.textSource}>
                  Sumber : {medical.dataMedical.source.name}
               </Text>
            </Container>
         </ScrollView>
      </View>
   );
};

export default DetailMedical;
