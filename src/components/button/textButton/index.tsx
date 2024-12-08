import React from 'react';
// Components
import { TouchableOpacity, Text } from 'react-native';
// Style
import { styles } from './styles';
// Types
import { ITextButtonProps } from '@/src/types/ITextButtonProps';

export default function TextButton({
  onPress,
  title,
  style,
  titleStyle,
}: ITextButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.mainContainer, style]}>
      <Text style={[styles.mainTitle, titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
}
