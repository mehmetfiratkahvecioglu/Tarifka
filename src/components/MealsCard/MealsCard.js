import React from 'react';
import {View, Text, ImageBackground, TouchableOpacity} from 'react-native';
import styles from './MealsCard.style';
const MealsCard = ({item, onSelect}) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <View style={styles.container}>
        <ImageBackground
          borderRadius={15}
          source={{uri: item.strMealThumb}}
          resizeMode="cover"
          style={styles.image}>
          <Text numberOfLines={1} style={styles.text}>
            {item.strMeal}
          </Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default MealsCard;
