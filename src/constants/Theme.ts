import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const screenWidth = Math.round(width);
const screenHeight = Math.round(height);

export const SCREEN_WIDTH = width;
export const SCREEN_HEIGHT = height;


export const COLORS = {
  white: "#ffffff",
  black: "#000",
  primary: "#063A4F",
  primary2: "#40196D",
  sky: "#F1FAF9",
  orange: "#ff7040",
  secondary: "#00caf2",
  green: "#47cc49",
  green2: "#038654",
  gray: "#EFF2F7",
  chocolate: "#5d5c6c",
  chocolateBackground: "#CECFCD",
  grey2: "#f6f5fa",
  grey3: "#efefef",
  gray4: "#B4B5B5",
  red: "red",
};

export const Sizes = {
  // global sizes
  base: screenHeight * 0.01, //for margin
  font: screenHeight * 0.0175, //basic font size
  radius: screenHeight * 0.015, //fixed borderRadius
  padding: screenHeight * 0.02, //for padding
  profileBorder: screenHeight * 0.5,
  profileHeight: screenHeight * 0.06,
  profileWidth: screenWidth * 0.13,
  tinyIcon: screenHeight * 0.025,
  bigRadius: screenHeight * 0.03,
  smallPadding: screenHeight * 0.007,

  // font sizes
  navTitle: screenHeight * 0.04375,
  h1: screenHeight * 0.0375,
  h2: screenHeight * 0.0275,
  h2a: screenHeight * 0.034,
  h2c: screenHeight * 0.0245,
  h3: screenHeight * 0.0225,
  h3a: screenHeight * 0.0235,
  h4: screenHeight * 0.0175,
  h5: screenHeight * 0.015,
  h6: screenHeight * 0.0135,
  h7: screenHeight * 0.0125,
  h8: screenHeight * 0.0115,
  body1: screenHeight * 0.0355,
  body2: screenHeight * 0.025,
  body3: screenHeight * 0.02,
  body3a: screenHeight * 0.02,
  body3b: screenHeight * 0.022,
  body4: screenHeight * 0.017,
  body5: screenHeight * 0.015,
  body6: screenHeight * 0.01,
  intro: screenHeight * 0.04,
  tinyText: screenHeight * 0.012,

  // app dimensions
  width,
  height,
};

const appTheme = [Colors, Sizes];
export default appTheme;
