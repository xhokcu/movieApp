import React from 'react';
// Components
import { StyleSheet, View, Text } from 'react-native';
import SignupForm from '@/src/components/form/signupForm';

export default function SignupScreen() {
  return (
    <View style={styles.container}>
      <SignupForm />
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
