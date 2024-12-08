import React from 'react';
// Components
import { StyleSheet, View, Text } from 'react-native';
import LoginForm from '@src/components/form/loginForm';

export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <LoginForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 24,
  },
});
