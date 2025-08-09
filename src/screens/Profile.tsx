import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import general from "../constants/General";
import { Colors, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";
import { useNavigation } from "expo-router";
import { Images } from "../constants/Images";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Icons } from "../constants/Icons";
import CustomHeader from "../components/CustomHeader";

const Profile = () => {
  return (
    <ScrollView style={general.container}>
      <CustomHeader title={'Profile'} />
      
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({});
