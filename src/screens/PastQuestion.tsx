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
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import {examData } from "../constants/DataBase";
const PastQuestion = () => {
  const [search,setSearch] = useState('')
  return (
    <View style={general.container}>
      <View style={[general.row, { alignItems: "center" }]}>
        <Text style={{ ...FONTS.h2, color: Colors.primary }}>
          Past Questions
        </Text>
        <CustomButton title="Request" />
      </View>
      <CustomInput
        value={search}
        onChangeText={setSearch}
        iconName="search"
        placeholder="Search for past questions..."
        containerStyle={{ marginTop: Sizes.body1 }}
      />
      <FlatList
        numColumns={2}
        data={examData}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} activeOpacity={0.8}>
            <Image source={item.image} style={styles.image} />
            <Text
              style={{
                ...FONTS.body3b,
                color: Colors.orange,
                margin: Sizes.radius,
              }}
            >
              {item.title}
            </Text>
            <Text style={{ ...FONTS.body4 }} numberOfLines={2}>
              {item.description}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default PastQuestion;

const styles = StyleSheet.create({
  image: {
    width: SCREEN_WIDTH * 0.3,
    height: SCREEN_HEIGHT * 0.15,
    borderRadius: Sizes.radius,
  },
  card: {
    margin: Sizes.base,
    padding: Sizes.padding,
    backgroundColor: Colors.white,
    borderRadius: Sizes.smallPadding,
    elevation: 2,
    width: SCREEN_WIDTH * 0.4,
    height: SCREEN_HEIGHT * 0.3,
  },
});
