import { useNavigation } from "expo-router";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../Redux/AuthSlice";
import { registerUser } from "../api/Auth";
import CustomButton from "../components/CustomButton";
import CustomInput from "../components/CustomInput";
import general from "../constants/General";
import { Colors, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";

const SignUp = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstname: "",
      password: "",
      lastname: "",
      email: "",
    },
  });
  const onSubmit = async (data: { email: any }) => {
    try {
      const response = await registerUser(data);
      console.log(response);
      if (response.status === 400) {
        dispatch(
          loginSuccess({
            user: {
              userId: response.data.userId,
              email: response.data.user.email,
              firstname: response.data.user.firstname,
              lastname: response.data.user.lastname,
                  },
            token: response.data.token,
          })
        );
        const email = response.data.user.email;
        navigation.navigate("Verification", { email });
      } else {
        console.error("Registration failed:", response.data.message);
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Registration failed. Please try again.");
    }
  };
  const [active, setActive] = React.useState("A");
  return (
    <View style={general.container}>
      <Text style={{ ...FONTS.h1 }}>Create an Account</Text>
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
            validate: (value) => value.trim().length > 0,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              placeholder="First name"
              onChangeText={onChange}
              value={value}
              iconName={"person-outline"}
            />
          )}
          name="firstname"
        />
        {errors.firstname && (
          <Text style={{ color: Colors.red }}>This field is required.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
            validate: (value) => value.trim().length > 0,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              placeholder="Last name"
              onChangeText={onChange}
              value={value}
              iconName={"person-outline"}
            />
          )}
          name="lastname"
        />
        {errors.lastname && (
          <Text style={{ color: Colors.red }}>This field is required.</Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
            pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            validate: (value) => value.trim().length > 0,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomInput
              placeholder="Email"
              onChangeText={onChange}
              value={value}
              iconName={"mail-outline"}
            />
          )}
          name="email"
        />
        {errors.email && (
          <Text style={{ color: Colors.red }}>
            Please enter a valid email address.
          </Text>
        )}
        <Controller
          control={control}
          rules={{
            required: true,
            minLength: 8,
            validate: (value) => value.trim().length > 0,
          }}
          render={({ field: { onChange, value } }) => (
            <CustomInput
              value={value}
              onChangeText={onChange}
              placeholder="Enter Your Password"
              iconName={"lock-outline"}
              secure={true}
            />
          )}
          name="password"
        />{" "}
        {errors.password && (
          <Text style={{ color: Colors.red }}>
            Password must be at least 8 characters.
          </Text>
        )}
      </View>
      <CustomButton title={"Create Account"} onPress={handleSubmit(onSubmit)} />
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
        Already have an account?{" "}
        <Text
          style={{ color: Colors.orange }}
          onPress={() => navigation.navigate("Login")}
        >
          LogIn
        </Text>
      </Text>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  text: {
    ...FONTS.body4,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: SCREEN_HEIGHT * 0.07,
  },
});
