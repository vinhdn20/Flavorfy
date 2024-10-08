import { Stack } from 'expo-router';
import ProtectedRoute from '../../src/components/ProtectedRoute';

export default function MainLayout() {
  return (
    <ProtectedRoute>
      <Stack>
        <Stack.Screen name="home" options={{  headerShown: false}} />
      </Stack>
    </ProtectedRoute>
  );
}
