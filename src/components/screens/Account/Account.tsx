import * as React from 'react';
import {
  Container,
  Icon,
  Divider,
  SearchBar,
  Button,
  Text,
} from '@src/components/elements';
import {
  ScrollView,
  Image,
  View,
  Alert,
  AlertButton,
  I18nManager,
} from 'react-native';
import ListRowItem from '@src/components/elements/List/ListRowItem';
import {profile} from '@src/data/mock-profile';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import AuthContext from '@src/context/auth-context';
import Api from '@src/context/api-context'
import AsyncStorage from '@react-native-community/async-storage';

type AccountProps = {};

const Account: React.FC<AccountProps> = () => {
  const navigation = useNavigation();
  const {signOut} = React.useContext(AuthContext);
  const {userToken} = React.useContext(AuthContext);
  const chevronIconName = I18nManager.isRTL ? 'chevron-left' : 'chevron-right';
  const [token, settoken] = React.useState("");

  React.useEffect(() => {
    const gettoken = async () => {
      const state = await AsyncStorage.getItem('token');
      settoken(state)
    };
    gettoken()
  }, []);

  // const alertButtons: AlertButton[] = [
  //   {
  //     text: 'Cancel',
  //     style: 'cancel',
  //   },
  //   {text: 'OK', onPress: () => signOut()},
  // ];

  const onLogoutButtonPressed = () => {
    // Alert.alert('Confirm', 'Are you sure you want to logout?', alertButtons);
    
    fetch(Api.base_url+Api.logOut,{
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization' : 'Bearer ' + token,
      }
    }).then((response) => response.json()).then((json) => {
        if (json.code !== 'SUCCESS') {
          console.log(json)
          Alert.alert('Error', 'Fault!')
        }else{
          // _onConfirmButtonPressed();
          console.log(json.message)

          Alert.alert('Success','Logout success!')
        }
    }).catch((error) => {
        console.error(error);
    });
    signOut()
    console.log(userToken)
  };

  return (
    <ScrollView>
      <SearchBar />
      <Divider />
      <Container>
        <ListRowItem
          title={profile.name}
          subTitle="Edit Profile"
          onPress={() => navigation.navigate('EditProfileScreen')}
          leftIcon={
            <Image source={profile.avatar} style={styles.profileAvatar} />
          }
          rightIcon={<Icon name={chevronIconName} />}
        />
      </Container>
      <Container style={styles.accountMenuItemContainer}>
        <Divider />
        <Divider />
        <ListRowItem
          title="Order History"
          onPress={() => navigation.navigate('OrderHistoryScreen')}
          rightIcon={<Icon name={chevronIconName} />}
        />
        <Divider />
        <ListRowItem
          title="Delivery Address"
          onPress={() => navigation.navigate('SavedAddressesScreen')}
          rightIcon={<Icon name={chevronIconName} />}
        />
        <Divider />
        <ListRowItem
          title="Settings"
          onPress={() => navigation.navigate('SettingsScreen')}
          rightIcon={<Icon name={chevronIconName} />}
        />
        <Divider />

        <ListRowItem
          title="Support Center"
          onPress={() => navigation.navigate('SupportCenterScreen')}
          rightIcon={<Icon name={chevronIconName} />}
        />
        <Divider />
        <ListRowItem
          title="Share Feedback"
          rightIcon={<Icon name={chevronIconName} />}
        />
      </Container>
      <View style={styles.buttonContainer}>
        <Button isFullWidth isTransparent onPress={onLogoutButtonPressed} style={{backgroundColor:"#fff"}}>
          <Text isBold style={{color:"red"}}>
            Logout
          </Text>
        </Button>
      </View>
    </ScrollView>
  );
};

export default Account;
