import React from "react";
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TextStyle,
  ViewStyle,
} from "react-native";
import { SCREEN_HEIGHT, SCREEN_WIDTH, Colors } from '../constants/Theme'
import general from "../constants/General";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type Props = {
  label?: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  inputStyle?: TextStyle;
  containerStyle?: ViewStyle;
  error?: string;
};

const CustomInput = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  inputStyle,
  containerStyle,
  error,iconName
}: Props) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {label && <Text style={general.label}>{label}</Text>}
      <View style={general.inputWrapper}>
        {iconName && (
          <MaterialIcons
            name={iconName}
            size={SCREEN_WIDTH * 0.06}
            color="#888"
            style={general.icon}
          />
        )}
        <TextInput
          style={[general.input, inputStyle]}
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          secureTextEntry={secureTextEntry}
          placeholderTextColor="#999"
        />
      </View>
      {error && <Text style={general.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
 
});

export default CustomInput;
