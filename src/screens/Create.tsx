import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton';
import { useNavigation } from 'expo-router';
import general from '../constants/General';

const Create = () => {
  const navigation = useNavigation();
  return (
    <View style={general.container}>
      <Text>Create</Text>
    </View>
  );
}

export default Create

const styles = StyleSheet.create({})