import { icons } from "@/constants/icons";
import { View, TouchableOpacity, Image, Text } from "react-native";

const Oauth = () => {
  return (
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
  );
};

export default Oauth;
