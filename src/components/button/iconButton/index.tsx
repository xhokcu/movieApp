import React from 'react';
// components
import { TouchableOpacity, Text } from 'react-native';
// styles
import { styles } from './styles';
import { IIconButtonProps } from '@/src/types/IIconButtonProps';

export default function IconButton({ icon, onPress, style }: IIconButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.mainContainer, style]}>
      {icon}
    </TouchableOpacity>
  );
}
