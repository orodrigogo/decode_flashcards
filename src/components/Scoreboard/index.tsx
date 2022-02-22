import React from 'react';
import { View } from 'react-native';
import { Score } from '../Score';

import { styles } from './styles';

type Props = {
  reviewed: number;
}

export function Scoreboard({ reviewed }: Props) {
  return (
    <View style={styles.container}>
      <Score label="Novo" value={3} />
      <View style={styles.divider} />
      <Score label="Rever" value={2} />
      <View style={styles.divider} />
      <Score label="Revisto" value={reviewed} />
    </View>
  );
}