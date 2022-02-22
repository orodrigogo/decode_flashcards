import React from 'react';
import { Pressable, PressableProps, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { useAnimationState, MotiView } from 'moti';

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
  const buttonAnimated = useAnimationState({
    pressIn: {
      transform: [{ scale: 0.8 }],
    },
    pressOut: {
      transform: [{ scale: 1 }],
    },
  });

  function handleAnimateScale(state: 'pressIn' | 'pressOut') {
    buttonAnimated.transitionTo(state);
  }


  return (
    <Pressable
      onPressIn={() => handleAnimateScale('pressIn')}
      onPressOut={() => handleAnimateScale('pressOut')}
      {...rest}
    >
      <MotiView
        style={[styles.container, styles[size], styles[color]]}
        state={buttonAnimated}
      >
        <MaterialIcons
          name={icon}
          size={size === 'small' ? 32 : 44}
          color={color === 'primary' ? COLORS.VIOLET : COLORS.WHITE}
        />
      </MotiView>
    </Pressable>
  );
}