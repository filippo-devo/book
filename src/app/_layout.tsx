import { Fraunces_500Medium_Italic, Fraunces_600SemiBold } from '@expo-google-fonts/fraunces';
import {
  PlusJakartaSans_400Regular,
  PlusJakartaSans_500Medium,
  PlusJakartaSans_600SemiBold,
  PlusJakartaSans_700Bold,
  PlusJakartaSans_800ExtraBold,
} from '@expo-google-fonts/plus-jakarta-sans';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

import { C } from '../theme';

// Tab roots switch instantly; detail screens slide in.
const TAB_ROOTS = ['index', 'znajdz', 'hospitality', 'rezerwacje', 'konto'];

export default function RootLayout() {
  const [loaded] = useFonts({
    Fraunces_600SemiBold,
    Fraunces_500Medium_Italic,
    PlusJakartaSans_400Regular,
    PlusJakartaSans_500Medium,
    PlusJakartaSans_600SemiBold,
    PlusJakartaSans_700Bold,
    PlusJakartaSans_800ExtraBold,
  });
  if (!loaded) return null;

  return (
    <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: C.foam } }}>
      {TAB_ROOTS.map((name) => (
        <Stack.Screen key={name} name={name} options={{ animation: 'none' }} />
      ))}
      <Stack.Screen name="my-ai" options={{ animation: 'fade_from_bottom' }} />
    </Stack>
  );
}
