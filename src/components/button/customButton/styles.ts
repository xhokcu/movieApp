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
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[4],
    borderRadius: borderRadius[2],
    width: '100%',
    justifyContent: justifyContent.center,
    alignItems: alignItems.center,
  },
  filledContainer: {
    backgroundColor: colorScheme.primary.green[60],
  },
  outlinedContainer: {
    backgroundColor: colorScheme.primary.white[10],
    borderWidth: 1,
    borderColor: colorScheme.primary.green[60],
  },
  mainTitle: {
    fontSize: fontSize.h6,
  },
  filledTitle: {
    color: colorScheme.primary.white[10],
  },
  outlinedTitle: {
    color: colorScheme.primary.green[60],
  },
  disabledContainer: {
    backgroundColor: colorScheme.primary.dark[30],
  },
  disabledTitle: {
    color: colorScheme.primary.dark[40],
  },
});
