import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  root: {
    flex: 1,
  },
  contentContainer: {
    padding: 15,
    display:"flex",
    flexDirection:"column",
    alignItems:"center",
    justifyContent:"center",
  },
  formContainer: {
    paddingTop: '20%',
    marginBottom: 30,
    width:'90%'
  },
  phoneNumberTextField: {
    marginTop: 30,
    backgroundColor:"#efefefef",
    borderBottomColor:"#000",
    borderBottomWidth:1,
  },
  phoneNumberText: {
    marginTop: 15,
    marginBottom: 15,
  },
  confirmButtonContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  cancelButtonContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
});
