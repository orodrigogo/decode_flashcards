import React from 'react';
import { View, Text } from 'react-native';

import { styles } from './styles';

type Props = {
  label: string;
  value: number;
}

export function Score({ label, value }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.value}>
        {value}
      </Text>

      <Text style={styles.label}>
        {label}
      </Text>
    </View>
  );
}