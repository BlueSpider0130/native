import * as React from 'react';
import {SafeAreaView, View, ScrollView, Alert} from 'react-native';
import {Text, TextField, Button, Dialog} from '@src/components/elements';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Api from '@src/context/api-context';

import { resolveConfig } from 'prettier';

type AuthWithPhoneNumberProps = {};

const AuthWithPhoneNumber: React.FC<AuthWithPhoneNumberProps> = () => {
  const navigation = useNavigation();
  const {card} = useThemeColors();
  const [phoneNumber, setPhoneNumber] = React.useState('');
  const [isModalVisible, setIsModalVisible] = React.useState(false);
  const [buttonColorActive, setActiveBtnColor] = React.useState(false);
  const [phonenumberValidation, setActive] = React.useState(false);

  let otpCodeGlobal =  "";

  const _onPhoneNumberFieldChange = (value: string) => {
    setPhoneNumber(value);
    if(value != ""){
      setActiveBtnColor(true);
    }else if(value == ""){
      setActiveBtnColor(false);
    }
    let lengthPhoneNumber = value.length;
    if(lengthPhoneNumber == 10){
      setActive(true);
    }
  };

  const _hideModal = () => {
    setIsModalVisible(false);
  };

  const _onConfirmButtonPressed = () => {
    console.log(phoneNumber);
    navigation.navigate('AuthVerificationCodeScreen',{
        otpCode : otpCodeGlobal,
        phoneNumber : phoneNumber
      });
    // _hideModal();
  };

  const _onNextButtonPressed = () => {
    if (!phoneNumber) {
      Alert.alert('Error', 'Please enter your phone number!');
      return;
    }
    // setIsModalVisible(true);
    
      fetch(Api.base_url+Api.getOTP+phoneNumber).then((response) => response.json()).then((json) => {
          
          if (typeof json.otpCode === 'undefined') {
            console.log("aaaaaaa")
            Alert.alert('Error', 'Please enter correct number!')
          }else{
            // Alert.alert('Success',json.otpCode)
            console.log(json.otpCode);
            otpCodeGlobal = json.otpCode;
            _onConfirmButtonPressed();
          }
      }).catch((error) => {
          console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.formContainer}>
          <Text isBold isHeadingTitle>
            Join now
          </Text>
          <Text isSecondary hasMargin style={{marginBottom:"10%"}}>
            Youth with you!
          </Text>
          <TextField
            style={[{backgroundColor: card}, styles.phoneNumberTextField]}
            value={phoneNumber}
            onChangeText={_onPhoneNumberFieldChange}
            hasMargin
            placeholder="Please input your phone number"
            placeholderTextColor="grey"
            keyboardType="phone-pad"  
            rightIcon={phonenumberValidation?"check-circle":null}
            phoneActive={phonenumberValidation}
            />
        </View>
        <Button isFullWidth onPress={_onNextButtonPressed} 
          style={{
            backgroundColor:buttonColorActive ? "#554D84" : "#C7C7CC",
            borderRadius:5,
            borderColor:"#C7C7CC",
            width:"90%",
            position:"relative",
            marginLeft:'5%',
            marginRight:'5%',
            marginTop:'5%',
          }}>
          <Text isBold style={{color:"#fff"}}>Get OTP?</Text>
        </Button>
      </ScrollView>
      <Dialog isVisible={isModalVisible} onBackdropPress={_hideModal}>
        <Text isCenter>Login with phone number</Text>
        <Text isHeadingTitle isCenter isBold style={styles.phoneNumberText}>
          {phoneNumber}
        </Text>
        <Text isCenter>
          We will send the authentication code to the phone number you entered.
        </Text>
        <Text isCenter>Do you want to continue?</Text>
        <View style={styles.confirmButtonContainer}>
          <Button isFullWidth onPress={_onConfirmButtonPressed}>
            <Text isBold>Confirm</Text>
          </Button>
        </View>
        <View style={styles.cancelButtonContainer}>
          <Button isFullWidth isTransparent onPress={_hideModal}>
            <Text>Cancel</Text>
          </Button>
        </View>
      </Dialog>
    </SafeAreaView>
  );
};

export default AuthWithPhoneNumber;
