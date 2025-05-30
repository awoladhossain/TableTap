import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  Image,
  ScrollView,
  TextInput,
  Button,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from "../../assets/images/dinetimelogo.png";
import underImg from "../../assets/images/Frame.png";
import validationSchema from "../../utils/authSchema";
const Signin = () => {
  const [secureText, setSecureText] = useState(true);
  const handleSignin = () => {};
  const router = useRouter();
  return (
    <SafeAreaView className="bg-[#1e1e2f] flex-1">
      <StatusBar barStyle="light-content" backgroundColor="#2b2b2b" />

      <KeyboardAvoidingView behavior="height" className="flex-1">
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
          }}
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo Section */}
          <View className="flex items-center mb-6">
            <Image source={logo} style={{ width: 200, height: 200 }} />
            <Text className="text-center text-lg font-semibold my-4 text-white">
              Lets Get Started
            </Text>
          </View>

          {/* Form Section */}
          <View className="w-5/6 bg-[#2b2b2b] p-6 rounded-lg shadow-lg">
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSignin}
            >
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <View className="w-full gap-4">
                  {/* Email Field */}
                  <View>
                    <Text className="text-white font-semibold">Email</Text>
                    <TextInput
                      onChangeText={handleChange("email")}
                      onBlur={handleBlur("email")}
                      value={values.email}
                      keyboardType="email-address"
                      autoCapitalize="none"
                      placeholder="Enter your email"
                      placeholderTextColor="gray"
                      className="w-full p-3 my-1 bg-[#3b3b3b] rounded-lg text-white border border-gray-600 focus:border-[#f49b33]"
                    />
                    {touched.email && errors.email && (
                      <Text className="text-red-500 text-sm">
                        {errors.email}
                      </Text>
                    )}
                  </View>

                  {/* Password Field */}
                  <View className="relative">
                    <Text className="text-white font-semibold">Password</Text>
                    <View className="flex-row items-center w-full bg-[#3b3b3b] rounded-lg border border-gray-600 focus:border-[#f49b33]">
                      <TextInput
                        onChangeText={handleChange("password")}
                        onBlur={handleBlur("password")}
                        value={values.password}
                        secureTextEntry={secureText}
                        placeholder="Enter your password"
                        placeholderTextColor="gray"
                        className="flex-1 p-3 text-white"
                      />
                      {/* Password Visibility Toggle */}
                      <TouchableOpacity
                        onPress={() => setSecureText(!secureText)}
                        className="p-3"
                      >
                        <Ionicons
                          name={secureText ? "eye-off" : "eye"}
                          size={22}
                          color="white"
                        />
                      </TouchableOpacity>
                    </View>
                    {touched.password && errors.password && (
                      <Text className="text-red-500 text-sm">
                        {errors.password}
                      </Text>
                    )}
                  </View>

                  {/* Submit Button */}
                  <TouchableOpacity
                    onPress={handleSubmit}
                    className="p-3 my-2 bg-[#ff6b35] rounded-lg"
                  >
                    <Text className="text-center text-xl font-semibold text-white">
                      Sign In
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            </Formik>
            <View className="items-center">
              <TouchableOpacity
                className="flex flex-row items-center mt-4"
                onPress={() => router.push("/signup")}
                activeOpacity={0.7} // Adds a subtle button press effect
              >
                <Text className="text-white font-semibold mr-1">New user?</Text>
                <Text className="text-base font-semibold underline text-[#f49b33]">
                  Sign Up
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* Bottom Image */}
          <Image
            source={underImg}
            style={{ width: "100%", height: 200, marginTop: 20 }}
            resizeMode="contain"
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default Signin;
