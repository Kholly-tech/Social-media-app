import CustomButton from "@/components/ui/Button";
import { icons } from "@/constants/icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";

const Signin = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [form, setForm] = useState({
    identifier: "",
    password: "",
  });

  const handleChamge = (field: string, value: string) => {
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

        <Text className="text-3xl font-bold text-center">
          Welcome !
        </Text>
        <Text className="text-sm font-normal text-center mt-2">
          Let’s begin from here! Let’s begin from here! Let’s begin from here!
          Let’s begin from here!
        </Text>

        <View className="mt-8">
          <TextInput
            placeholder="Email/username"
            className="p-3 border border-gray-300 rounded-lg"
          />
          <View className="flex-row mt-3 items-center border border-gray-300 rounded-lg px-2">
            <TextInput
              placeholder="***********"
              secureTextEntry={!showPassword}
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
        </View>
      </View>
    </View>
  );
};

export default Signin;
