import React from 'react';
import { Pressable } from 'react-native';

import {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming
} from 'react-native-reanimated';

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
  const flipPositionAnimate = useSharedValue(0);

  const frontCardAnimated = useAnimatedStyle(() => {
    return {
      transform: [{
        rotateY: `${interpolate(flipPositionAnimate.value, [0, 1], [0, 180])}deg`
      }],
    }
  });

  const backCardAnimated = useAnimatedStyle(() => {
    return {
      transform: [{
        rotateY: `${interpolate(flipPositionAnimate.value, [0, 1], [180, 360])}deg`
      }],
    }
  });

  function handleFlipCard() {
    const newValue = flipPositionAnimate.value === 0 ? 1 : 0;
    flipPositionAnimate.value = withTiming(newValue, { duration: 300 });
  }

  return (
    <Pressable onPress={handleFlipCard}>
      <Card label={data.front} style={frontCardAnimated} />
      <Card label={data.back} style={[styles.back, backCardAnimated]} />
    </Pressable>
  );
}