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
  mainContainer: {
    padding: spacing[2],
    borderRadius: borderRadius[2],
    width: 'auto',
    justifyContent: justifyContent.center,
    alignItems: alignItems.center,
  },
  mainTitle: {
    fontSize: fontSize.h6,
    color: colorScheme.primary.green[60],
  },
});
