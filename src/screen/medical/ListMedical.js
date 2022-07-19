import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Container from '../../components/Container';
import {getListMedical, saveDetailMedical} from '../../redux/actions/medical';
import {View, Text, FlatList} from 'react-native';
import image from '../../assets/images/image-item.png';
import List from '../../components/List';
import {styles} from '../../assets/styles/styles';

const ListMedical = ({navigation}) => {
   const {medical} = useSelector(state => state);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getListMedical());
   }, [dispatch]);

   const detailMedicalHandle = item => {
      dispatch(saveDetailMedical(item));
      navigation.navigate('DetailMedical');
   };

   return (
      <View style={styles.background}>
         <Container>
            <Text style={styles.headerPage}>Kesehatan</Text>
            <FlatList
               data={medical.listMedical}
               renderItem={({item}) => {
                  return (
                     <List
                        path={
                           item.urlToImage !== null
                              ? {
                                   uri: `${item.urlToImage}`,
                                }
                              : image
                        }
                        title={item.title}
                        date={item.publishedAt}
                        source={item.source.name}
                        navigate={() => detailMedicalHandle(item)}
                     />
                  );
               }}
            />
         </Container>
      </View>
   );
};

export default ListMedical;
