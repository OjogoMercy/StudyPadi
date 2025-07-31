import { Dimensions } from "react-native";
import FormInputs from "../Components/FormInputs";
const { width, height } = Dimensions.get("window");

const screenWidth = Math.round(width);
const screenHeight = Math.round(height);

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;

export const Colors = {
  primary: "#2F75FD", //blue
  secondary: "#0F48B8", //dark-blue
  green: "#27ae60",
  lightBlue: "#5f97fe", //light blue
  veryLight: "#CDE1FF", //very light blue
  extraLight: "#F0FAFF",
  white: "#FFFFFF", //white
  black: "#000000", //black
  gray: "#808080", //gray
  red: "#b40c0cff",
  dangerRed: "#F92525",
};
