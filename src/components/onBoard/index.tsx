// Components
import { StyleSheet, View, Text, Button } from 'react-native';
import CustomButton from '@/src/components/button/customButton';
// Style
import { styles } from './styles';
// SVG
import OnboardIcon from '@assets/svg/OnboardIcon';
// Router
import { useRouter } from 'expo-router';

export default function Onboard() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Let's get started!</Text>
      <View style={styles.iconContainer}>
        <OnboardIcon />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          onPress={() => router.push('/(auth)/login')}
          type="fill"
          title="Login"
        />
        <CustomButton
          onPress={() => router.push('/(auth)/signup')}
          type="outline"
          title="Sign Up"
        />
      </View>
    </View>
  );
}
