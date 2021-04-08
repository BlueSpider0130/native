import * as React from 'react';
import {useContext} from 'react';
import {SafeAreaView, View, Text, TouchableOpacity, Alert} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {createStackNavigator} from '@react-navigation/stack';
import useThemeColors from '@src/custom-hooks/useThemeColors';
import AuthContext from '@src/context/auth-context'

type Lazy_comProps = {};
const Stack = createStackNavigator();

const Lazy_com: React.FC<Lazy_comProps> = () => {

  const {userToken} = useContext(AuthContext);
  const {signIn} = React.useContext(AuthContext);
  const insets = useSafeAreaInsets();
  const {background} = useThemeColors();
  return (
    <View style={{
      width:"100%",
      height:"100%",
      display:'flex',
      justifyContent:"center",
      alignItems:"center",
    }}>
      <TouchableOpacity onPress={signIn}>
        <Text>
          ...
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Lazy_com;
