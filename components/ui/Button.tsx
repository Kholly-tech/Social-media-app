import React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-paper";

const CustomButton = ({ text, onPress }: { text: string; onPress: () => void; }) => {
  return (
    <View>
      <Button
        buttonColor="#D83738"
        textColor="white"
        className="mt-4"
        onPress={onPress}
      >
        <Text>{text}</Text>
      </Button>
    </View>
  );
};

export default CustomButton;
