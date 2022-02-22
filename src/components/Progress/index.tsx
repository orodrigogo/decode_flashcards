import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
  currentCard: number;
  totalOfCards: number;
}

export function Progress({ currentCard, totalOfCards }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.percentage}>
        <Text style={styles.label}>0%</Text>

        <View style={styles.thumbProgressBar}>
          <View style={styles.currentProgressBar} />
        </View>

        <Text style={styles.label}>100%</Text>
      </View>

      <Text style={styles.label}>{currentCard} de {totalOfCards} cards</Text>
    </View >
  );
}