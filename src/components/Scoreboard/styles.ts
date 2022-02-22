import { StyleSheet } from 'react-native';
import { COLORS } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 80,
    backgroundColor: COLORS.VIOLET,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30
  },
  divider: {
    height: 45,
    width: 1,
    backgroundColor: COLORS.WHITE,
    marginHorizontal: 40
  }
});