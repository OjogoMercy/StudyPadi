import { StyleSheet } from "react-native";
import { Colors,Sizes,FONTS,SCREEN_HEIGHT,SCREEN_WIDTH } from "./Theme";

const general = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    paddingVertical: SCREEN_HEIGHT * 0.03,
    backgroundColor: Colors.white,
  },
  centered: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: SCREEN_WIDTH * 0.06,
    color: "#333333",
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
  text: {
    ...FONTS.h1,
    color: Colors.black,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: SCREEN_HEIGHT * 0.02,
    paddingHorizontal: SCREEN_WIDTH * 0.05,
    borderRadius: SCREEN_WIDTH * 0.03,
    alignItems: "center",
      marginTop: SCREEN_HEIGHT * 0.02,

  },
  buttonText: {
    color: Colors.white,
    fontWeight: "500",
  },
  input: {
    borderColor: "#cccccc",
    borderWidth: 1,
    borderRadius: SCREEN_WIDTH * 0.02,
    paddingHorizontal: SCREEN_WIDTH * 0.04,
    paddingVertical: SCREEN_HEIGHT * 0.015,
    fontSize: SCREEN_WIDTH * 0.04,
    marginBottom: SCREEN_HEIGHT * 0.02,
  },
  disabled: {
    backgroundColor: Colors.sky,
  },
});

export default general;
