import React from 'react';
import { Pressable, PressableProps, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { COLORS } from '../../global/theme';

type Props = PressableProps & {
  size?: 'small' | 'large';
  color?: 'primary' | 'secondary';
  icon: keyof typeof MaterialIcons.glyphMap;
}

export function Button({
  size = 'small',
  color = 'primary',
  icon,
  ...rest
}: Props) {
  return (
    <Pressable {...rest}>
      <View style={[styles.container, styles[size], styles[color]]}>
        <MaterialIcons
          name={icon}
          size={size === 'small' ? 32 : 44}
          color={color === 'primary' ? COLORS.VIOLET : COLORS.WHITE}
        />
      </View>
    </Pressable>
  );
}