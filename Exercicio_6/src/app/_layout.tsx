import { DarkTheme, DefaultTheme, ThemeProvider, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Exercícios' }} />
        <Stack.Screen name="index1" options={{ title: 'Exercício 1' }} />
        <Stack.Screen name="index2" options={{ title: 'Exercício 2' }} />
        <Stack.Screen name="index3" options={{ title: 'Exercício 3' }} />
        <Stack.Screen name="index4" options={{ title: 'Exercício 4' }} />
        <Stack.Screen name="index5" options={{ title: 'Exercício 5' }} />
        <Stack.Screen name="explore" options={{ title: 'Explore' }} />
      </Stack>
    </ThemeProvider>
  );
}
