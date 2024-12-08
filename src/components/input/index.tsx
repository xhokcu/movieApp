// Components
import { TextInput, Text, View } from 'react-native';
import { ICustomInputProps } from '@/src/types/ICustomInputProps';
// Style
import { styles } from './styles';

export default function CustomInput({
  label,
  value,
  onChangeText,
  textContentType,
  placeholder,
  secureTextEntry,
}: ICustomInputProps) {
  return (
    <View style={styles.container}>
      {label && <Text style={styles.labelStyle}>{label}</Text>}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={val => onChangeText(val)}
        textContentType={textContentType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
}
