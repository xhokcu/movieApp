import { Stack } from 'expo-router/stack';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '@/firebase';
import { useEffect, useState } from 'react';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
