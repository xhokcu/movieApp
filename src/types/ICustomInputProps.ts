import { TextInputIOSProps } from 'react-native';

export interface ICustomInputProps {
  placeholder: string;
  value: string;
  onChangeText: (val: string) => void;
  label?: string;
  textContentType?: TextInputIOSProps['textContentType'];
  secureTextEntry?: any;
}
