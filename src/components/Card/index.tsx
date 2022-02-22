import React from 'react';
import { Text, View, ViewProps } from 'react-native';

import { styles } from './styles';

type Props = ViewProps & {
  label: string;
}

export function Card({ label, style }: Props) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>
        {label}
      </Text>
    </View>
  );
}