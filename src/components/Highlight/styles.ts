import { StyleSheet } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { COLORS } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: getStatusBarHeight() + 35,
    marginBottom: 48,
  },
  title: {
    fontSize: 22,
    color: COLORS.WHITE,
    fontWeight: 'bold',
    textAlign: 'right',
  },
});