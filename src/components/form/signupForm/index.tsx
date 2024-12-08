// React
import React, { useEffect } from 'react';
import { useState } from 'react';
// Components
import { View, Text, TextInput, Button } from 'react-native';
// Styles
import { styles } from './styles';
// Firebase
import { registration } from '@src/services/api';
import CustomButton from '../../button/customButton';
import CustomInput from '../../input';

export default function SignupForm() {
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);

  useEffect(() => {
    if (
      firstName.length > 0 &&
      lastName.length > 0 &&
      email.length > 0 &&
      password.length > 0
    ) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [firstName, lastName, email, password]);

  async function handleRegister() {
    await registration({
      firstName,
      lastName,
      email,
      password,
    });
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign up</Text>
      <View style={styles.formContainer}>
        <CustomInput
          label="First Name"
          placeholder="First Name"
          value={firstName}
          onChangeText={val => setFirstName(val)}
        />
        <CustomInput
          label="Last Name"
          placeholder="Last Name"
          value={lastName}
          onChangeText={val => setLastName(val)}
        />
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
      <CustomButton
        type="fill"
        disabled={isButtonDisabled}
        title="Sign up"
        onPress={handleRegister}
      />
    </View>
  );
}
