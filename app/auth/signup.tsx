import Oauth from "@/components/auth/Oauth";
import CustomButton from "@/components/ui/Button";
import CustomRadioButton from "@/components/ui/RadioButton";
import CustomSelectButton from "@/components/ui/SelectButton";
import { dates, months, years } from "@/constants/dateConstants";
import { icons } from "@/constants/icons";
import { Link } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { Button } from "react-native-paper";

const Signup = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    gender: "male",
    day: "",
    month: "",
    year: "",
    password: "",
    cpassword: "",
  });

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSignUp = async() => {
    try {
      console.log('Submitting details: ', JSON.stringify(form));
    } catch (error) {
      
    }
  }

  return (
    <View className="flex-1 items-center justify-center px-4 py-8 bg-white">
      <View className="w-full max-w-md">
        <View className="items-center mb-8">
          <Image
            source={icons.skopoosLogo}
            resizeMode="contain"
            className="w-full h-32"
          />
        </View>
        <Text className="text-3xl font-bold text-center">
          Welcome to Skopoos!
        </Text>
        <Text className="text-lg text-gray-400 font-semibold text-center mt-2">
          Find Purpose, Join Skopoos to communicate with your loved ones.
        </Text>

        <View className="mt-6 w-full">
          <View className="flex-row gap-2 mb-2">
            <TextInput
              placeholder="First Name"
              id="firstname"
              className="p-3 border text-gray-500 border-gray-300 rounded-lg flex-1"
              onChangeText={(text) => handleChange("firstname", text)}
            />
            <TextInput
              placeholder="Last Name"
              id="lastname"
              className="p-3 border text-gray-500 border-gray-300 rounded-lg flex-1"
              onChangeText={(text) => handleChange("lastname", text)}
            />
          </View>
          <TextInput
            placeholder="Phone Number"
            keyboardType="phone-pad"
            id="phonenumber"
            className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
            onChangeText={(text) => handleChange("phone", text)}
          />
          <TextInput
            placeholder="Email Address"
            keyboardType="email-address"
            id="email"
            className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
            onChangeText={(text) => handleChange("email", text)}
          />

          {/* Gender */}
          <View className="mt-2">
            <Text className="text-gray-500 font-semibold">Gender</Text>
            <View className="flex-row gap-5 mt-1">
              <CustomRadioButton
                value="male"
                title="Male"
                status={form.gender === "male"}
                onPress={() => handleChange("gender", "male")}
              />
              <CustomRadioButton
                value="female"
                title="Female"
                status={form.gender === "female"}
                onPress={() => handleChange("gender", "female")}
              />
            </View>
          </View>

          {/* Date of Birth drop down */}
          <View className="mt-2">
            <Text className="text-gray-500 font-semibold">Date Of Birth</Text>
            <View className="flex-row gap-2 mt-1">
              <View className="flex-1 max-w-[90px]">
                <CustomSelectButton
                  options={dates}
                  selectedValue={form.day}
                  onSelect={(value) => handleChange("day", value)}
                  placeholder="Day"
                />
              </View>
              <View className="flex-1 max-w-[120px]">
                <CustomSelectButton
                  options={months}
                  selectedValue={form.month}
                  onSelect={(value) => handleChange("month", value)}
                  placeholder="Month"
                />
              </View>
              <View className="flex-1 max-w-[100px]">
                <CustomSelectButton
                  options={years}
                  selectedValue={form.year}
                  onSelect={(value) => handleChange("year", value)}
                  placeholder="Year"
                />
              </View>
            </View>
          </View>

          <TextInput
            placeholder="Password"
            keyboardType="visible-password"
            id="password"
            secureTextEntry
            className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
            onChangeText={(text) => handleChange("password", text)}
          />

          <TextInput
            placeholder="Confirm Password"
            keyboardType="visible-password"
            id="cpassword"
            secureTextEntry
            className="mt-2 p-3 border border-gray-300 rounded-lg w-full"
            onChangeText={(text) => handleChange("cpassword", text)}
          />

          <CustomButton text="Sign Up" onPress={handleSignUp} />
        </View>

        <Oauth />

        <Text className="mt-4 items-center text-center">
          Have an account? Sign in {""}
          <Link href="/auth/signin" className="text-[#D83738] font-semibold">
             here
          </Link>
        </Text>
      </View>
    </View>
  );
};

export default Signup;
