import React from 'react';
import { Pressable } from 'react-native';

import { Card } from '../Card';
import { styles } from './styles';

type Props = {
  data: {
    id: string;
    front: string;
    back: string;
  }
}

export function FlipCard({ data }: Props) {
  return (
    <Pressable onPress={() => { }}>
      <Card label={data.front} />
      <Card label={data.back} style={styles.back} />
    </Pressable>
  );
}