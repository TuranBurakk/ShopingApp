import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './ProductCard.style';

const ProductCard = ({product}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.image}} />
      <View style={styles.body}>
        <Text style={styles.title}></Text>
        <Text style={styles.price}></Text>
      </View>
    </View>
  );
};
