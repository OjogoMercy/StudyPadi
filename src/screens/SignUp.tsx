import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import general from '../constants/General'
import { Colors, Sizes, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";
import CustomButton from '../components/CustomButton';
import { useNavigation } from 'expo-router';
import CustomInput from '../components/CustomInput';

const SignUp = () => {
  const navigation = useNavigation()
  const [active, setActive] = React.useState<"A" | "B" | null>(null);
  const [firstName,setFirstName] = useState('')
  const [lastName, setLastName] = useState("");
  return (
    <View style={general.container}>
      <Text style={styles.title}>Create an Account</Text>
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
      <CustomInput
        value={firstName}
        onChangeText={setFirstName}
        placeholder="Enter your first name"
        iconName={'person'}
      />
    </View>
  );
}

export default SignUp

const styles = StyleSheet.create({
  title: {
    ...FONTS.h1
  },
  
})