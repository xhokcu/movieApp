// React
import { useEffect, useState } from 'react';
// Styles
import { styles } from './styles';
// Components
import { View, Text, TextInput, Button } from 'react-native';
import CustomButton from '../../button/customButton';
import TextButton from '../../button/textButton';
// Services
import { login } from '@src/services/api';
import CustomInput from '../../input';
// Route
import { useRouter } from 'expo-router';

export default function LoginForm() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const router = useRouter();

  async function handleLogin() {
    await login({ email, password });
    setEmail('');
    setPassword('');
  }

  useEffect(() => {
    if (email.length > 0 && password.length > 0) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome back!</Text>
      <View style={styles.formContainer}>
        <CustomInput
          label="Email"
          placeholder="Email"
          value={email}
          onChangeText={val => setEmail(val)}
        />
        <CustomInput
          label="Password"
          placeholder="Password"
          value={password}
          onChangeText={val => setPassword(val)}
          textContentType="password"
          secureTextEntry={true}
        />
      </View>
      <View style={styles.buttonContainer}>
        <CustomButton
          disabled={isButtonDisabled}
          type="fill"
          title="Login"
          onPress={handleLogin}
        />
        <View style={styles.textButtonContainer}>
          <Text>Don't you have an account? </Text>
          <TextButton
            titleStyle={styles.textButton}
            title="Sign Up"
            onPress={() => router.push('/(auth)/signup')}
          />
        </View>
      </View>
    </View>
  );
}
