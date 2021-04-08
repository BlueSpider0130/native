import {I18nManager, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1,
    marginTop: 5,
    marginBottom: 5,
    height: 45,
  },
  leftIcon: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: I18nManager.isRTL ? 10 : 0,
  },
  textField: {
    flex: 1,
    padding: 12,
    borderRadius: 1,
    height: 45,
  },
  rightIcon: {
    paddingRight: 10,
    paddingTop: 50,
    paddingBottom:10,
    paddingLeft: I18nManager.isRTL ? 10 : 0,
    color:"blue",
  },
  
});
