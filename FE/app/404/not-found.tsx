import { Link } from 'expo-router';
import { View, Text } from 'react-native';

export default function NotFound() {
  return (
    <View>
      <Text>Page could not be found. Go back.</Text>
      <Link href="/main/home">Go to Home</Link>
    </View>
  );
}
