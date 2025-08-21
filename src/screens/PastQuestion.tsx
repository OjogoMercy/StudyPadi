import {  StyleSheet,  Text,  TouchableOpacity, View,  Image,  FlatList,} from "react-native";
import React, { useState } from "react";
import general from "../constants/General";
import {
  Colors,
  FONTS,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  Sizes,
} from "../constants/Theme";
import { useNavigation } from "expo-router";
import { Images } from "../constants/Images";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
const PastQuestion = () => {
  const [search,setSearch] = useState('')
  return (
    <View style={general.container}>
      <View style={[general.row, {alignItems:'center'}]}>
        <Text style={{ ...FONTS.h2, color: Colors.primary }}>
          Past Questions
        </Text>
          <CustomButton title="Request" />
      </View>
      <CustomInput value={search} onChangeText={setSearch} iconName="search" placeholder="Search for past questions..." containerStyle={{marginTop:Sizes.body1}}/>
    </View>
  );
};

export default PastQuestion;

const styles = StyleSheet.create({});
