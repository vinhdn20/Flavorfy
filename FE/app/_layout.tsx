import { Stack } from 'expo-router';
import { AuthProvider } from '@/src/components/Context/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="auth" />
        <Stack.Screen name="main" />
        <Stack.Screen name="404" options={{ title: "Page not found" }} />
      </Stack>
    </AuthProvider>
  );
}
