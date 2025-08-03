import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React,{useState} from 'react'
import general from '../constants/General'
import { Colors, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";
import CustomButton from '../components/CustomButton';
import { useNavigation } from 'expo-router';
import CustomInput from '../components/CustomInput';

const SignUp = () => {
  const navigation = useNavigation()
  const [active, setActive] = React.useState('A');
  const [firstName,setFirstName] = useState('')
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState('')
  const [password,setPassword] = useState('')
  return (
    <View style={general.container}>
      <Text style={{...FONTS.h1}}>Create an Account</Text>
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
        <CustomInput
          value={firstName}
          onChangeText={setFirstName}
          placeholder="Enter your first name"
          iconName={"person"}
        />
        <CustomInput
          value={lastName}
          onChangeText={setLastName}
          placeholder="Enter your last name"
          iconName={"person"}
        />
        <CustomInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          iconName={"mail-outline"}
        />
        <CustomInput
          value={password}
          onChangeText={setPassword}
          placeholder="Enter Your Password"
          iconName={"lock-outline"}
          secureTextEntry={true}
        />
      </View>
      <CustomButton
        title={"Create Account"}
        onPress={() => navigation.navigate("Verification")}
      />
      <View style={{ flexDirection: "row",alignItems:'center',justifyContent:'space-between', marginTop:SCREEN_HEIGHT*0.07}}>
        <View
          style={{
            height: 1,
            width: SCREEN_WIDTH * 0.41,
            backgroundColor: Colors.black,
          }}
        /><Text>Or</Text>
        <View
          style={{
            height: 1,
            width: SCREEN_WIDTH * 0.41,
            backgroundColor: Colors.black,
          }}
        />
      </View>
      <Text style={styles.text}>Already have an account? <Text style={{color:Colors.orange}}  onPress={() => navigation.navigate('Login')}>LogIn</Text></Text>
      <Text style={styles.text}>Already have an account? <Text style={{color:Colors.orange}}  onPress={() => navigation.navigate('Login')}>LogIn</Text></Text>
    </View>
  );
}

export default SignUp

const styles = StyleSheet.create({
  text: {
    ...FONTS.body4,
    alignSelf: "center",
    fontWeight: "bold",
    marginTop: SCREEN_HEIGHT * 0.07,
  },
});