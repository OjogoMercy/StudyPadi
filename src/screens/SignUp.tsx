import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import general from '../constants/General'
import { Colors, Sizes, FONTS, SCREEN_HEIGHT, SCREEN_WIDTH } from "../constants/Theme";
import CustomButton from '../components/CustomButton';
import { useNavigation } from 'expo-router';

const SignUp = () => {
  const navigation = useNavigation()
  const [active,setActive] = React.useState(false)
  return (
    <View style={general.container}>
      <Text style={styles.title}>Create an Account</Text>
      <View style={{ flexDirection: "row", width: SCREEN_WIDTH * 0.9 }}>
        <View style={{ width: SCREEN_WIDTH * 0.45 }}>
          <CustomButton
            title={'Email'}
            // onPress={undefined}
            active={active}
            disabled={false}
          />
        </View>
        <View style={{ width: SCREEN_WIDTH * 0.45 }}>
          <CustomButton
            title={'Mobile'}
            // onPress={undefined}
            active={active}
            disabled={false}
          />
        </View>
      </View>
    </View>
  );
}

export default SignUp

const styles = StyleSheet.create({
  title: {
    ...FONTS.h1
  },
  
})