import { StyleSheet } from 'react-native';
import { COLORS } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10
  },
  small: {
    width: 60,
    height: 60,
  },
  large: {
    width: 80,
    height: 80,
  },
  primary: {
    backgroundColor: COLORS.WHITE
  },
  secondary: {
    backgroundColor: COLORS.VIOLET
  }
});