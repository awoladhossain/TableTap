import { Stack } from "expo-router";
import "../global.css";
import { enableScreens } from "react-native-screens";
enableScreens();
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false, animation: "ios_from_right" }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
