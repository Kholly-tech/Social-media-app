import { icons } from "@/constants/icons";
import { router } from "expo-router";
import { useEffect } from "react";
import { Image, View } from "react-native";

export default function Index() {
  useEffect(() => {
    setTimeout(() => router.replace('/auth/signup'), 3000);
  });
  return (
    <View className="flex-1 items-center justify-center mt-auto">
      <View className="w-full max-w-[300px] items-center mb-8">
        <Image
          source={icons.skopoosLogo}
          resizeMode="contain"
          className="w-full h-32" // Keep the height as needed
        />
      </View>
    </View>
  );
}
