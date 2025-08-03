import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import general from "../constants/General";
import { Colors, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";
import CustomButton from "../components/CustomButton";
import { useNavigation } from "expo-router";
import CustomInput from "../components/CustomInput";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useForm, Controller } from "react-hook-form";
const LoginScreen = () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm({
      defaultValues: {
        firstName: "",
        lastName: "",
      },
    });
    const onSubmit = (data) => console.log(data);
  const [active, setActive] = React.useState("A");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [box, setBox] = useState(false)
  
  const navigation = useNavigation()
  return (
    <View style={general.container}>
      <Text style={{ ...FONTS.h1 }}>Login to your account</Text>
      <Text style={{ ...FONTS.body4 }}>
        Start your Academic journey with ease
      </Text>
      <View style={{ flexDirection: "row", width: SCREEN_WIDTH * 0.9 }}>
        <View style={{ width: SCREEN_WIDTH * 0.45 }}>
          <CustomButton
            title={"Email"}
            onPress={() => setActive("A")}
            active={active === "A"}
            disabled={false}
          />
        </View>
        <View style={{ width: SCREEN_WIDTH * 0.45 }}>
          <CustomButton
            title={"Mobile"}
            onPress={() => setActive("B")}
            active={active === "B"}
            disabled={false}
          />
        </View>
      </View>
      <View style={{ marginTop: SCREEN_HEIGHT * 0.05 }}>
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              placeholder="First name"
              onChangeText={onChange}
              value={value}
              iconName={"mail-outline"}
            />
          )}
          name="firstName"
        />
        {errors.firstName && <Text>This is required.</Text>}

        <CustomInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter Your Password"
          iconName={"lock-outline"}
          secureTextEntry={true}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity onPress={() => setBox(!box)}>
            <MaterialIcons
              name={box ? "check-box-outline-blank" : "check-box"}
              size={24}
              color={Colors.primary}
            />
          </TouchableOpacity>
          <Text>Remember Me?</Text>
        </View>
        <Text style={{ color: Colors.primary }}>Password</Text>
      </View>
      <CustomButton title="Sign In" onPress={handleSubmit(onSubmit)} />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: SCREEN_HEIGHT * 0.07,
        }}
      >
        <View
          style={{
            height: 1,
            width: SCREEN_WIDTH * 0.41,
            backgroundColor: Colors.black,
          }}
        />
        <Text>Or</Text>
        <View
          style={{
            height: 1,
            width: SCREEN_WIDTH * 0.41,
            backgroundColor: Colors.black,
          }}
        />
      </View>
      <Text style={styles.text}>
        Don't have an account?{" "}
        <Text
          style={{ color: Colors.orange }}
          onPress={() => navigation.navigate("SignUp")}
        >
          SignUp
        </Text>
      </Text>
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  text: {
    ...FONTS.body4,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: SCREEN_HEIGHT * 0.07,
  },
});
