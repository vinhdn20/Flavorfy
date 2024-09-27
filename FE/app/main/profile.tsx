import { View, Text, Button } from 'react-native';
import { useAuth } from '@/src/components/Context/AuthContext';

export default function HomeScreen() {
  const { logout } = useAuth();

  return (
    <View>
      <Text>Welcome to the Home Page!</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}
