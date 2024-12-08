export interface ICustomButtonProps {
  onPress: () => void;
  type: 'fill' | 'outline';
  title: string;
  style?: object;
  titleStyle?: object;
  disabled?: boolean;
}
