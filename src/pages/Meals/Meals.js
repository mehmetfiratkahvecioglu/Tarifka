import React from 'react';
import {View, Text, FlatList} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import MealsCard from '../../components/MealsCard';
import styles from './Meals.style';
import Loading from '../../components/Loading';
const Meals = ({route, navigation}) => {
  const {category} = route.params;
  const {data, loading, error} = useFetch(
    `${Config.FILTER_CATEGORIES_API_URL}${category}`,
  );

  const handleMealsSelect = id => {
    navigation.navigate('Detail', {idNumber: id});
  };

  const renderItem = ({item}) => (
    <MealsCard item={item} onSelect={() => handleMealsSelect(item.idMeal)} />
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Loading />
      </View>
    );
  }
  if (error) {
    return <Text>{error}</Text>;
  }
  return (
    <View style={styles.container}>
      <FlatList data={data.meals} renderItem={renderItem} />
    </View>
  );
};

export default Meals;
