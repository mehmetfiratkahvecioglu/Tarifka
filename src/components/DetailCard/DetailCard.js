import React from 'react';
import {View, Text, Image, Button, Linking} from 'react-native';
import styles from './DetailCard.style';
const DetailCard = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: item.strMealThumb,
        }}
      />
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{item.strMeal}</Text>
      </View>
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyText}>{item.strInstructions}</Text>
      </View>
      <View style={styles.button}>
        <Button
          title="Watch on Youtube"
          onPress={() => {
            Linking.openURL(item.strYoutube);
          }}
          color={'red'}
        />
      </View>
    </View>
  );
};

export default DetailCard;
