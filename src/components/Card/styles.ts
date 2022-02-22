import { StyleSheet, Dimensions } from 'react-native';
import { COLORS } from '../../global/theme';

export const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('screen').width - 40,
    height: 180,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.WHITE,
    marginRight: 20,
    backfaceVisibility: 'hidden'
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    padding: 12
  },
});