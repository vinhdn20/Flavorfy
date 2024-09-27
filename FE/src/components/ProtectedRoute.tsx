import {useEffect} from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import { useAuth } from '@/src/components/Context/AuthContext';
import { useRouter } from 'expo-router';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const { isAuthenticated } = useAuth();  // Giả sử có hook useAuth() để kiểm tra đăng nhập
    const router = useRouter();
  
    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/auth/login');
      }
    }, [isAuthenticated]);
  
    return isAuthenticated ? children : null;
}
