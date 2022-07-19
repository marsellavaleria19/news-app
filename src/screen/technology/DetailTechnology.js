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

const DetailTechnology = ({navigation}) => {
   const {technology} = useSelector(state => state);
   const [picture, setPicture] = useState();

   useEffect(() => {
      setPicture(
         technology.dataTechnology !== null &&
            technology.dataTechnology.urlToImage !== null
            ? {uri: `${technology.dataTechnology.urlToImage}`}
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
                  {technology.dataTechnology.title}
               </Text>
               <View style={styles.layoutDetailAuthor}>
                  <Text style={styles.textDetailAuthor}>
                     {technology.dataTechnology.author !== null
                        ? `${technology.dataTechnology.author} | ${moment(
                             technology.dataTechnology.publishedAt,
                          ).format('DD MMM YYYY hh:mm')}`
                        : moment(technology.dataTechnology.publishedAt).format(
                             'DD MMM YYYY hh:mm',
                          )}
                  </Text>
               </View>
               <Text style={styles.descriptionDetail}>
                  {technology.dataTechnology.content !== null
                     ? technology.dataTechnology.content
                     : 'No Content'}
               </Text>
               <Text style={styles.textSource}>
                  Sumber : {technology.dataTechnology.source.name}
               </Text>
            </Container>
         </ScrollView>
      </View>
   );
};

export default DetailTechnology;
