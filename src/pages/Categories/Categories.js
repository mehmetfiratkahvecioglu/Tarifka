import React from 'react';
import {
  SafeAreaView,
  Text,
  FlatList,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';

import Config from 'react-native-config'; // config
import CategoryCard from '../../components/renderCategories'; //compoenents
import useFetch from '../../hooks/useFetch'; //hook

const Categories = ({navigation}) => {
  const {data, loading, error} = useFetch(Config.CATEGORIES_API_URL);

  const handleCategorySelect = categoryName => {
    navigation.navigate('Meals', {category: categoryName});
  };

  const renderItem = ({item}) => (
    <CategoryCard
      item={item}
      onSelect={() => {
        handleCategorySelect(item.strCategory);
      }}
    />
  );

  if (loading) {
    return <ActivityIndicator size="large" color="black" />;
  }
  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={data.categories} renderItem={renderItem} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: 'orange'},
});
export default Categories;
