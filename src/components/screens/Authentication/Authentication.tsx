import * as React from 'react';
import { View, Image } from 'react-native';
import { Container, Text, Button } from '@src/components/elements';
import AuthContext from '@src/context/auth-context';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from "react-native-animatable";
import Animated from 'react-native-reanimated';

type AuthenticationProps = {};

const Authentication: React.FC<AuthenticationProps> = () => {
  const navigation = useNavigation();
  const { primary } = useThemeColors();
  const { signIn } = React.useContext(AuthContext);
  
  const [step, setStep] = React.useState(0);

  const _onConnectWithPhoneNumberButtonPressed = () => {
    navigation.navigate('AuthWithPhoneNumberScreen');
  };

  //this is splash
  React.useEffect(() => {
    console.log(signIn)
    timeout()
  }, [step])

  const timeout = () => {
    setTimeout(() => {
      changeScreen()
    }, 1000)
  }

  const changeScreen = () => {
    if (step < 3) {
      console.log("this is step:", step)
      setStep(step + 1)
    }
  }

  const ViewAnimated = Animatable.createAnimatableComponent(View);

  return (
    <>
      {step == 0 && 
        <Container style={styles.container}>

          <Animatable.Text
            animation="slideInDown" style={styles.headingText}
          >
              Unild
          </Animatable.Text>
          <Animatable.Text animation="fadeIn" style={styles.introductionText_1}>
          All services that Vietnam Student needs
          </Animatable.Text>
          <Animatable.Image animation="flipInY"
            source={require('../../../assets/app/first/first_1.png')}
            style={styles.appIcon}
          />
          <Animatable.Image animation="swing"
            source={require('../../../assets/app/first/first_2.png')}
            style={styles.appIconWith_1}
          />
          <View style={styles.bottomCarousel_1}>
            <View style={styles.firstPiece_1}>
              <View style={styles.fPiece_1}></View>
            </View>
            <View style={styles.secondPiece_1}>
              <View style={styles.sPiece_1}></View>
            </View>
            <View style={styles.thirdPiece_1}>
              <View style={styles.tPiece_1}></View>
            </View>
          </View>

      </Container>}
      {step == 1 && 
        <Container style={styles.container}>
          <Animatable.Text
            animation="slideInDown" style={styles.headingText}
          >
              Vouchers are waiting! 
          </Animatable.Text>
          <Animatable.Text animation="fadeIn" style={styles.introductionText_1}>
            Grab voucher then shop things you want
          </Animatable.Text>
          <Animatable.Image animation="flipInY"
            source={require('../../../assets/app/second/second_1.png')}
            style={styles.appIcon_2}
          />
          <Animatable.Image animation="swing"
            source={require('../../../assets/app/second/second_2.png')}
            style={styles.appIconWith_2}
          />
          <View style={styles.bottomCarousel_2}>
            <View style={styles.firstPiece_2}>
              <View style={styles.fPiece_2}></View>
            </View>
            <View style={styles.secondPiece_2}>
              <View style={styles.sPiece_2}></View>
            </View>
            <View style={styles.thirdPiece_2}>
              <View style={styles.tPiece_2}></View>
            </View>
          </View>
        </Container>}
      {step >= 2 && 
        <Container style={styles.container}>
          <Animatable.Text
            animation="slideInDown" style={styles.headingText}
          >
              Verified services and shops
          </Animatable.Text>
          <Animatable.Text animation="fadeIn" style={styles.introductionText}>
              Vé xem phim, vé du lịch, gà rán
              Gi gỉ gì gi cái gì cũng có
          </Animatable.Text>
          <Animatable.Image animation="flipInY"
            source={require('../../../assets/app/third/third_1.png')}
            style={styles.appIcon}
          />
          <Animatable.Image animation="swing"
            source={require('../../../assets/app/third/third_2.png')}
            style={styles.appIconWith}
          />
          <Container style={styles.loginMethodContainer}>
            <Button
              style={styles.button}
              isFullWidth
              onPress={_onConnectWithPhoneNumberButtonPressed}>
              <Text isBold isWhite style={styles.btnText}>
                Join Now
              </Text>
            </Button>
          </Container>
          <View style={styles.bottomCarousel_3}>
            <View style={styles.firstPiece_3}>
              <View style={styles.fPiece_3}></View>
            </View>
            <View style={styles.secondPiece_3}>
              <View style={styles.sPiece_3}></View>
            </View>
            <View style={styles.thirdPiece_3}>
              <View style={styles.tPiece_3}></View>
            </View>
          </View>
        </Container>}
    </>
  );
};
//I need to find splash screen
export default Authentication;
