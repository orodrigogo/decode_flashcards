import { StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { COLORS } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.BACKGROUND,
  },
  tip: {
    color: COLORS.WHITE,
    fontSize: 14,
    marginVertical: 34,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: getBottomSpace() + 17,
    marginTop: 30
  }
});