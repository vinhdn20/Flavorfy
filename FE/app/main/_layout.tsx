import { Stack } from 'expo-router';
import ProtectedRoute from '../../src/components/ProtectedRoute';

export default function MainLayout() {
  return (
    <ProtectedRoute>
      <Stack>
        <Stack.Screen name="home" options={{ title: 'Home' }} />
        <Stack.Screen name="profile" options={{ title: 'Profile' }} />
      </Stack>
    </ProtectedRoute>
  );
}
