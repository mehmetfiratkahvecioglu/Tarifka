import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './renderCategory.style';
const renderCategory = ({item, onSelect}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.img}
          source={{
            uri: item.strCategoryThumb,
          }}
        />
        <Text style={styles.text}>{item.strCategory}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default renderCategory;
