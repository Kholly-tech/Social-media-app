import { View, Text, TouchableWithoutFeedbackComponent, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React from 'react'
import { RadioButton } from 'react-native-paper';

interface RadioButtonProps {
    value: string;
    status: boolean;
    title: string; 
    onPress: () => void;
}

const CustomRadioButton = ({value, status, title, onPress}: RadioButtonProps) => {
  return (
    <TouchableOpacity className="flex-row items-center" onPress={onPress}>
      <RadioButton
        value={value}
        color="#D83738"
        uncheckedColor="#d1d5db"
        status={status ? "checked" : "unchecked"}
        onPress={onPress}
      />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

export default CustomRadioButton;