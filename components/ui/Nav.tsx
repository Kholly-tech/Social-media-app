import { View, Text, Image } from 'react-native'
import React from 'react'
import { icons } from '@/constants/icons'
import { navItems } from '@/constants/navItems'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const Nav = () => {
  return (
    <View className='flex flex-row px-5 items-center justify-between gap-3'>
      {navItems.map((nav, i) => (
        <View key={i}>
            {/* <MaterialCommunityIcons name={`${nav.icon}`} size={48} color={'grey'} /> */}
        </View>
      ))}
    </View>
  )
}

export default Nav