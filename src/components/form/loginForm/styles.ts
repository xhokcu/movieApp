import { StyleSheet } from 'react-native';
import { theme } from '@common/theme/theme';
import { startAt } from 'firebase/firestore';

const {
  spacing,
  fontSize,
  flexDirection,
  alignItems,
  justifyContent,
  borderRadius,
  borderWidth,
  textDecorationLine,
} = theme;

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: spacing[9],
  },
  title: {
    fontSize: fontSize.h4,
    fontWeight: '500',
  },
  formContainer: {
    gap: spacing[6],
  },
  input: {
    padding: spacing[4],
    borderWidth: borderWidth[1],
    borderRadius: borderRadius[2],
    width: '100%',
  },
  textButtonContainer: {
    flexDirection: flexDirection.row,
    alignItems: alignItems.center,
    justifyContent: justifyContent.center,
  },
  textButton: {
    fontSize: fontSize.h8,
    textDecorationLine: textDecorationLine.underline,
  },
  buttonContainer: {
    gap: spacing[1],
  },
  passwordContainer: {
    justifyContent: justifyContent.start,
    backgroundColor: 'red',
  },
});
