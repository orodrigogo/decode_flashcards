import { StyleSheet } from 'react-native';
import { COLORS } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    color: COLORS.WHITE,
    fontSize: 12
  },
  value: {
    color: COLORS.WHITE,
    fontSize: 32,
    fontWeight: 'bold'
  }
});