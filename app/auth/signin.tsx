import CustomButton from "@/components/ui/Button";
import { icons } from "@/constants/icons";
import { FontAwesome, MaterialCommunityIcons } from "@expo/vector-icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });
  const [rememberMe, setRememberMe] = useState(false);

  const handleChange = (field: string, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignin = async () => {
    try {
      console.log("Signing in with: ", JSON.stringify(form));
    } catch (error) {}
  };
  return (
    <View className="flex-1 items-center justify-center px-4 py-8 bg-white">
      <View className="w-full max-w-md">
        <View className="items-center mb-6">
          <Image
            source={icons.skopoosLogo}
            resizeMode="contain"
            className="w-full h-32"
          />
        </View>

        <Text className="text-3xl font-bold text-center">Welcome !</Text>
        <Text className="text-sm font-normal text-center mt-2">
          Let’s begin from here! Let’s begin from here! Let’s begin from here!
          Let’s begin from here!
        </Text>

        <View className="mt-8">
          <TextInput
            placeholder="Email/username"
            className="p-3 border border-gray-300 rounded-lg"
            onChangeText={(text: string) => handleChange("identifier", text)}
          />
          <View className="flex-row mt-3 items-center border border-gray-300 rounded-lg px-2">
            <TextInput
              placeholder="***********"
              secureTextEntry={!showPassword}
              onChangeText={(text: string) => {
                handleChange("password", text);
              }}
              className="p-3 flex-1 "
            />
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              onPress={() => setShowPassword(!showPassword)}
              color={""}
              className=""
            />
          </View>

          <CustomButton text="Continue" onPress={handleSignin} />

          <View className="mt-2 flex-row justify-between items-center">
            <TouchableOpacity
              className="flex flex-row gap-2"
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View className="border border-black w-6 h-6 rounded-md">
                {rememberMe ? (
                  <FontAwesome name="check" size={18} color="black" />
                ) : (
                  ""
                )}
              </View>
              <Text>Remember me</Text>
            </TouchableOpacity>

            <Link href="/auth/signin" className="text-blue-500">
              Forget Password?
            </Link>
          </View>

          <View className="items-center mt-8 flex-col space-y-4 gap-4">
            <TouchableOpacity
              className="py-4 px-16 w-full flex-row items-center gap-3 border border-gray-300 rounded-xl"
              onPress={() => console.log("Google Clicked")}
            >
              <Image
                source={icons.googleIcon}
                resizeMode="cover"
                className="w-8 h-8 justify-center"
              />
              <Text className="text-xl font-semibold text-center">
                Continue with Google
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="py-4 px-16 w-full flex-row items-center gap-3 border border-gray-300 rounded-xl"
              onPress={() => console.log("Apple Clicked")}
            >
              <Image
                source={icons.appleIcon}
                resizeMode="cover"
                className="w-8 h-8 justify-center"
              />
              <Text className="text-xl font-semibold text-center">
                Continue with Apple
              </Text>
            </TouchableOpacity>
          </View>

          <Text className="mt-4 items-center text-center">
            Don't have account? {""}
            <Link href="/auth/signup" className="text-[#D83738] font-semibold">
              Sign up
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Signin;
