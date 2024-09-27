import { Stack } from 'expo-router';
import { AuthProvider } from '@/src/components/Context/AuthContext';

export default function RootLayout() {
  return (
    <AuthProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth/_layout" />
        <Stack.Screen name="main/_layout" />
        <Stack.Screen name="404/not-found" options={{ title: "Page not found" }} />
      </Stack>
    </AuthProvider>
  );
}
