import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'


const signup = () => {
  return (
    <View className='w-full mx-10 items-center justify-center mt-2r0'>
        <View>
            <Image source={icons.skopoosLogo} resizeMode='cover' className='px-5' />
        </View>
      <Text className='text-xl font-bold'>signup</Text>
    </View>
  )
}

export default signup