import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import DetailCard from '../../components/DetailCard/DetailCard';
import Loading from '../../components/Loading';
const Detail = ({route}) => {
  const {idNumber} = route.params;
  const {data, loading, error} = useFetch(
    `${Config.MEAL_BY_ID_API_URL}${idNumber}`,
  );

  const renderItem = ({item}) => <DetailCard item={item} />;

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
    <View>
      <FlatList data={data.meals} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {flex: 1, backgroundColor: 'white'},
});

export default Detail;
