import { StyleSheet } from 'react-native';
// theme
import { theme } from '@common/theme/theme';

const { spacing, fontSize, borderWidth, borderRadius, colorScheme } = theme;

export const styles = StyleSheet.create({
  container: {
    gap: spacing[2],
  },
  labelStyle: {
    fontSize: fontSize.h9,
    fontWeight: 800,
    color: colorScheme.primary.green[60],
  },
  input: {
    width: '100%',
    padding: spacing[4],
    borderWidth: borderWidth[1],
    borderRadius: borderRadius[2],
    borderColor: colorScheme.primary.dark[50],
  },
});
