import React from 'react';
import { View, Text } from 'react-native';

import PinSvg from '../../assets/pin.svg';

import { styles } from './styles';

export function Highlight() {
  return (
    <View style={styles.container}>
      <PinSvg />

      <Text style={styles.title}>
        Rever ajuda a fixar {'\n'} o conhecimento.
      </Text>
    </View>
  );
}