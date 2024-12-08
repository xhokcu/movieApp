import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Stack, useRouter } from 'expo-router';
import ArrowBackIcon from '@/assets/svg/ArrawBackIcon';
import IconButton from '@/src/components/button/iconButton';

export default function StackLayout() {
  const router = useRouter();

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          title: 'landing',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          title: '',
          headerTitle: '',
          headerLeft: () => (
            <IconButton
              onPress={() => router.back()}
              icon={<ArrowBackIcon />}
              style={{ padding: 0 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          title: '',
          headerLeft: () => (
            <IconButton
              onPress={() => router.back()}
              icon={<ArrowBackIcon />}
              style={{ padding: 0 }}
            />
          ),
        }}
      />
    </Stack>
  );
}
