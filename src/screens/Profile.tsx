import { StyleSheet, Text, TouchableOpacity, View, Image, ScrollView,FlatList } from "react-native";
import React, { useState } from "react";
import general from "../constants/General";
import { Colors, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH ,Sizes} from "../constants/Theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomHeader from "../components/CustomHeader";
import { menuOptions } from "../constants/DataBase";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const Profile = () => {
  return (
    <ScrollView style={general.container}>
      <CustomHeader title={'Profile'} />
      <View style={styles.box}>
        <FlatList
          data={menuOptions}
          renderItem={({ item }) => {
            return (
              <View style={{ flexDirection: "row", padding: Sizes.smallPadding }}>
                <Ionicons name={item.icon as keyof typeof Ionicons.glyphMap} size={Sizes.body4} />
                <Text style={{ ...FONTS.body4 }}>{item.title}</Text>
                <MaterialIcons name="keyboard-arrow-right" size={24} color={Colors.black} style={{marginLeft:'auto'}}/>
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};
export default Profile;
const styles = StyleSheet.create({
  box: {
    backgroundColor: Colors.lightGray,
    borderRadius: Sizes.radius,
    width: SCREEN_WIDTH * 0.9,
    height: SCREEN_HEIGHT * 0.6,
    borderWidth: Sizes.body6,
    borderColor:Colors.black
  }
});
