import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';

import { styles } from './styles';

type Props = {
  currentCard: number;
  totalOfCards: number;
}

export function Progress({ currentCard, totalOfCards }: Props) {
  const [width, setWidth] = useState(0);
  const animated = useSharedValue(-1000);

  const progressBarAnimated = useAnimatedStyle(() => {
    return {
      transform: [{
        translateX: animated.value
      }]
    }
  });

  useEffect(() => {
    const nowProgressBarWidth = -width + (width * currentCard) / totalOfCards;
    animated.value = withTiming(nowProgressBarWidth, { duration: 300 });

  }, [currentCard, width]);


  return (
    <View style={styles.container}>
      <View style={styles.percentage}>
        <Text style={styles.label}>0%</Text>

        <View style={styles.thumbProgressBar}>
          <Animated.View
            style={[styles.currentProgressBar, progressBarAnimated]}
            onLayout={(e) => {
              const currentWidth = e.nativeEvent.layout.width;
              setWidth(currentWidth);
            }}
          />
        </View>

        <Text style={styles.label}>100%</Text>
      </View>

      <Text style={styles.label}>{currentCard} de {totalOfCards} cards</Text>
    </View >
  );
}