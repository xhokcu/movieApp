import React from 'react';
// Components
import { StyleSheet, View } from 'react-native';
import Onboard from '@/src/components/onBoard';

export default function OnboardScreen() {
  return (
    <View style={styles.container}>
      <Onboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
});
