import { useRouter } from "expo-router";
import {
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../assets/images/dinetimelogo.png";
import underImg from "../assets/images/Frame.png";
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}
export default function Index() {
  const router = useRouter();
  const handleNavigate = (route) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    router.push(route);
  };
  return (
    <SafeAreaView className={`bg-[#1e1e2f]`}>
      <StatusBar barStyle={"light-content"} backgroundColor={"#2b2b2b"} />
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="m-2 flex justify-center items-center">
          <Image source={logo} style={{ width: 300, height: 300 }} />
          <View className="w-3/4">
            <TouchableOpacity
              onPress={() => router.push("/signup")}
              className="p-2 my-2 bg-[#ff6b35] rounded-lg"
            >
              <Text className="text-center text-xl font-semibold text-white">
                Sign Up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => router.push("/home")}
              className="p-2 my-2 bg-[#2b2b2b] rounded-lg max-w-fit border border-[#4a90e2]"
            >
              <Text className="text-center text-xl font-semibold text-[#4a90e2]">
                Guest User
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View>
            <Text className="text-center text-base font-semibold my-4 text-white">
              <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" /> or{" "}
              {""}
              <View className="border-b-2 border-[#f49b33] p-2 mb-1 w-24" />
            </Text>
            <TouchableOpacity
              className="flex flex-row items-center"
              onPress={() => router.push("/signin")}
            >
              <Text className="text-white font-semibold">
                Already have an account?
              </Text>
              <Text className="text-base font-semibold underline text-[#f49b33] ">
                Sign in
              </Text>
            </TouchableOpacity>
          </View> */}
          <View className="items-center my-4">
            <View className="flex flex-row items-center w-3/4 justify-between">
              <View className="border-b-2 border-[#f49b33] w-24" />
              <Text className="text-white font-semibold mx-2">or</Text>
              <View className="border-b-2 border-[#f49b33] w-24" />
            </View>

            <TouchableOpacity
              className="flex flex-row items-center mt-4"
              onPress={() => router.push("/signin")}
              activeOpacity={0.7} // Adds a subtle button press effect
            >
              <Text className="text-white font-semibold mr-1">
                Already have an account?
              </Text>
              <Text className="text-base font-semibold underline text-[#f49b33]">
                Sign in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className="flex-1">
          <Image
            source={underImg}
            className="w-full h-full"
            resizeMode="contain"
          ></Image>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
