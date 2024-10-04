import { Stack } from 'expo-router';
import ProtectedRoute from '../../src/components/ProtectedRoute';

export default function MainLayout() {
  return (
    <ProtectedRoute>
      <Stack>
        <Stack.Screen name="not-found" options={{  headerShown: false}} />
      </Stack>
    </ProtectedRoute>
  );
}
