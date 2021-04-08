import * as React from 'react';
import {useContext} from 'react';
import {SafeAreaView, View, ScrollView, Alert, TouchableOpacity} from 'react-native';
import {Text, Button, Icon} from '@src/components/elements';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import {useNavigation, StackActions} from '@react-navigation/native';
import AuthContext from '@src/context/auth-context'
import { AsyncStorage } from 'react-native';
import Api from '@src/context/api-context';
type AuthVerificationCodeProps = {};

const CELL_COUNT = 5;

const AuthVerificationCode: React.FC<AuthVerificationCodeProps> = (prop) => {
  const navigation = useNavigation();
  const otpCode = prop.route.params.otpCode;
  const phoneNumber = prop.route.params.phoneNumber;
  // console.log(otpCode,"---",phoneNumber);
  console.log(phoneNumber);

  // console.log(props.route.params.otpCode)
  // props.navigation.navigate('otpCode')}

  const {userToken} = useContext(AuthContext);

  const {primary, border} = useThemeColors();
  const [value, setValue] = React.useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
  const [isShow, setShowActive] = React.useState(false);
  const {signIn} = React.useContext(AuthContext);
  
  React.useEffect(() => {
    if (value.length === 5) {
      setShowActive(true);
    }
  },[value]);

  const _onNextButtonPressed = () => {
    if (value.length !== 5 || value !== otpCode) {
      Alert.alert('Error', 'Verification code is not valid!');
      return;
    }else if (value == otpCode) {
      fetch(Api.base_url+Api.otpLogin,{
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          otp: otpCode,
          phoneNumber: phoneNumber,
        })
      }).then((response) => response.json()).then((json) => {
          if (typeof json.accessToken === 'undefined') {
            console.log(json)
            Alert.alert('Error', 'We can not register you!')
          }else{
            // _onConfirmButtonPressed();
            console.log(json.accessToken)
            Alert.alert('Success','Register success!')
            signIn();
            AsyncStorage.setItem('token', json.accessToken);
          }
      }).catch((error) => {
          console.error(error);
      });
  
      console.log("authed token:", userToken);
    }
  };

  const sendOtpAgain = () => {

    fetch(Api.base_url+Api.sendOtpAgain,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        phone: phoneNumber,
      })
    }).then((response) => response.json()).then((json) => {
        if (typeof json.message === 'undefined') {
          Alert.alert('Error', 'We can not send OTP!')
        }else{
          // _onConfirmButtonPressed();
          console.log(json.message)
          Alert.alert('Success','OTP was sent successfully!')
        }
    }).catch((error) => {
        console.error(error);
    });

  }

  return (
    <SafeAreaView style={styles.root}>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.formContainer}>
          <Text isBold isHeadingTitle>
            OTP?
          </Text>
          {/* <Text isSecondary hasMargin>
            A verification code has been sent to your mobile phone
          </Text> */}
          <View style={styles.verificationCodeContainer}>
            <CodeField
              ref={ref}
              {...props}
              value={value}
              onChangeText={setValue}
              cellCount={CELL_COUNT}
              rootStyle={styles.codeFieldRoot}
              keyboardType="number-pad"
              textContentType="oneTimeCode"
              renderCell={({index, symbol, isFocused}) => (
                <Text
                  key={index}
                  style={[  
                    styles.cell,
                    {
                      borderColor: isFocused ? primary : "#000",
                    },
                  ]}
                  onLayout={getCellOnLayoutHandler(index)}>

                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              )} 
            />
          </View>
        </View>
        <View style={{
          display:"flex",
          flexDirection:"row",
          justifyContent:"flex-end"
        }}>
          <Text isSecondary hasMargin style={{
            width:'100%',
            textAlign:"right",
            color:"black"
          }}>
            Don't recieve OTP? &nbsp;&nbsp; 
          </Text>
          <TouchableOpacity>
            <Text isSecondary hasMargin onPress={sendOtpAgain} style={{
              color:primary,
              fontWeight:"bold"
            }}>
              Re-send
            </Text>
          </TouchableOpacity>
        </View>
        <Button style={[
          styles.confirm_btn,
          {
            display:isShow ? "flex" : "none",
          },
        ]} onPress={_onNextButtonPressed}>
          <Icon name="check" color="#fff" size={30} ></Icon>
        </Button>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AuthVerificationCode;
