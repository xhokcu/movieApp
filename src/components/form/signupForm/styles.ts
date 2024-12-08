import { StyleSheet } from 'react-native';
import { theme } from '@/src/common/theme/theme';

const { fontSize, spacing } = theme;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: spacing[9],
  },
  formContainer: {
    gap: spacing[6],
  },
  title: {
    fontSize: fontSize.h4,
    fontWeight: '500',
  },
  input: {
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    width: '100%',
  },
});
