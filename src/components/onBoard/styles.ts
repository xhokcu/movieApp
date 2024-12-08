import { StyleSheet } from 'react-native';
import { theme } from '@common/theme/theme';

const {
  colorScheme,
  spacing,
  borderRadius,
  fontSize,
  justifyContent,
  alignItems,
} = theme;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: spacing[12],
  },
  iconContainer: {
    alignItems: alignItems.center,
  },
  title: {
    fontSize: fontSize.h4,
    fontWeight: '500',
  },
  buttonContainer: {
    gap: spacing[6],
  },
});
