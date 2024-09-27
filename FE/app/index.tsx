import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function Index() {
  return (
    <View>
      <Text>Welcome to the app!</Text>
      <Link href="/main/home">Go to Home</Link>
    </View>
  );
}
