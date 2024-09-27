import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useAuth } from '@/src/components/Context/AuthContext';
import { useRouter } from 'expo-router';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push('./Auth/login');
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Redirecting to login...</Text>
      </View>
    );
  }

  return <>{children}</>;
}
