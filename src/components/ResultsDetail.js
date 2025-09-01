import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';

export default function ResultsDetail({ result }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: result.image_url }} style={styles.image} />
      <Text style={styles.name}>{result.name}</Text>
      <Text style={styles.rating}>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
      {/* <Text style={styles.price}>{result.price}</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    // marginVertical: 10,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
  rating: {
    color: 'gray',
    fontSize: 14,
  },
  price: {
    color: 'green',
  },
});
