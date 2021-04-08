import * as React from 'react';
import AuthContext from '@src/context/auth-context';
import AsyncStorage from '@react-native-community/async-storage';

type AuthProviderProps = {};

type AuthState = {
  isLoading: boolean;
  isSignOut: boolean;
  userToken: string | null;
};

type AuthAction =
  | {type: 'RESTORE_TOKEN'; token: string | null}
  | {type: 'SIGN_IN'; token: string | null}
  | {type: 'SIGN_OUT'; token?: ""};

const initialAuthState: AuthState = {
  isLoading: false,
  isSignOut: false,
  userToken: "2",
};

const AuthReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        userToken: action.token,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...state,
        userToken: action.token,
        isSignOut: false,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        userToken: "",
        isSignOut: true,
      };
    default:
      return state;
  }
};

const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
  const [state, dispatch] = React.useReducer(AuthReducer, initialAuthState);
  const {userToken} = state;

  const authContext = React.useMemo(
    () => ({
      userToken,
      signIn: () => {
        AsyncStorage.setItem('userToken', '1');
        dispatch({type: 'SIGN_IN', token: '1'});
      },
      signOut: () => {
        AsyncStorage.setItem('userToken', "");
        dispatch({type: 'SIGN_OUT'});
      },
      signUp: () => {
        AsyncStorage.setItem('userToken', '1');
        dispatch({type: 'SIGN_IN', token: '1'});
      },
    }),
    [userToken],
  );

  return (
    <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
