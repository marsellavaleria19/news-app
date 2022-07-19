import React from 'react';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Container from '../../components/Container';
import {
   getListTechnology,
   saveDetailTechnology,
} from '../../redux/actions/technology';
import {View, Text, FlatList} from 'react-native';
import image from '../../assets/images/image-item.png';
import List from '../../components/List';
import {styles} from '../../assets/styles/styles';

const ListTechnology = ({navigation}) => {
   const {technology} = useSelector(state => state);
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getListTechnology());
   }, [dispatch]);

   const detailTechnologyHandle = item => {
      dispatch(saveDetailTechnology(item));
      navigation.navigate('DetailTechnology');
   };

   return (
      <View style={styles.background}>
         <Container>
            <Text style={styles.headerPage}>Teknologi</Text>
            <FlatList
               data={technology.listTechnology}
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
                        navigate={() => detailTechnologyHandle(item)}
                     />
                  );
               }}
            />
         </Container>
      </View>
   );
};

export default ListTechnology;
