import { View, Text, Image } from 'react-native'
import React from 'react'
import { Entypo, Feather } from '@expo/vector-icons';
import { icons } from '@/constants/icons';

const Header = () => {
  return (
    <View className="flex flex-row px-5 py-5 gap-10 items-center justify-between max-w-md">
      <Entypo name="menu" size={38} color="black" />
      <View className="w-14 h-16 flex-1 items-center justify-center">
        <Image
          source={icons.skopoosLogo}
          className="w-full h-full"
          resizeMode="cover"
        />
      </View>
      <Feather name="search" size={30} color="black" />
    </View>
  );
}

export default Header