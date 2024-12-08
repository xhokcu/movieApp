import React from 'react';
// components
import { TouchableOpacity, Text } from 'react-native';
// styles
import { styles } from './styles';
import { ICustomButtonProps } from '@/src/types/ICustomButtonProps';

// Arrayler sirali sekilde birlestirilir, yani sonraki stil onceki stili ezer.
// [styles.container, style]
// en son style verilecegi icin style digerini ezer ve uygulanir.

// disabled cannot edit from outside. it should be same on every screen.

// const CustomButton: React.FC<CustomButtonProps>
export default function CustomButton({
  onPress,
  type,
  title,
  style,
  titleStyle,
  disabled,
}: ICustomButtonProps) {
  const mainContainerStyle = [
    styles.mainContainer,
    disabled
      ? styles.disabledContainer
      : type === 'fill'
      ? styles.filledContainer
      : styles.outlinedContainer,
    !disabled && style,
  ];

  const mainTitleStyle = [
    styles.mainTitle,
    disabled
      ? styles.disabledTitle
      : type === 'fill'
      ? styles.filledTitle
      : styles.outlinedTitle,
    !disabled && titleStyle,
  ];

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={mainContainerStyle}
    >
      <Text style={mainTitleStyle}>{title}</Text>
    </TouchableOpacity>
  );
}
