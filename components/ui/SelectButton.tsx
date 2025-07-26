import React, { useState } from "react";
import {
  FlatList,
  Modal,
  Pressable,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

type Option = {
  label: string;
  value: string;
};

type SelectButtonProps = {
  options: Option[];
  selectedValue: string;
  onSelect: (value: string) => void;
  placeholder?: string;
};

const CustomSelectButton: React.FC<SelectButtonProps> = ({
  options,
  selectedValue,
  onSelect,
  placeholder = "Select an option",
}) => {
  const [open, setOpen] = useState(false);

  const selectedLabel =
    options.find((opt) => opt.value === selectedValue)?.label || placeholder;

  return (
    <View className="w-full">
      <TouchableOpacity
        className="p-3 border border-gray-400 rounded-md bg-white"
        onPress={() => setOpen(true)}
        activeOpacity={0.7}
      >
        <Text className="text-base text-gray-800">{selectedLabel}</Text>
      </TouchableOpacity>
      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable className="flex-1" onPress={() => setOpen(false)}>
          <View className="absolute left-0 right-0 mx-4 top-1/4 border border-gray-400 rounded-md bg-white max-h-44 z-50 shadow-lg self-center w-11/12">
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity
                  className="p-3 border-b border-b-gray-200"
                  onPress={() => {
                    onSelect(item.value);
                    setOpen(false);
                  }}
                >
                  <Text className="text-base text-gray-800">{item.label}</Text>
                </TouchableOpacity>
              )}
              keyboardShouldPersistTaps="handled"
            />
          </View>
        </Pressable>
      </Modal>
    </View>
  );
};

export default CustomSelectButton;
