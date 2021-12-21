import React from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import DetailCard from '../../components/DetailCard/DetailCard';
const Detail = ({route}) => {
  const {idNumber} = route.params;
  const {data, loading, error} = useFetch(
    `${Config.MEAL_BY_ID_API_URL}${idNumber}`,
  );

  const renderItem = ({item}) => <DetailCard item={item} />;

  if (loading) {
    return <ActivityIndicator size="large" color="black" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <View>
      <FlatList data={data.meals} renderItem={renderItem} />
    </View>
  );
};

export default Detail;
