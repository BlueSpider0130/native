import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  root: {
    flex: 1,
    display:'flex',
    justifyContent:'center',
    alignItems:'center'
  },
  contentContainer: {
    width:'90%',
    padding: 15,
    display:"flex",
    flexDirection:"column",
    alignItems:"center"
  },
  formContainer: {
    paddingTop: '20%',
    width:'100%'
  },
  codeFieldRoot: {
    marginTop: 20,
  },
  cell: {
    width: 60,
    height: 60,
    lineHeight: 60,
    fontSize: 24,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    margin: 5
  },
  verificationCodeContainer: {
    marginTop: 10,
  },
  confirm_btn: {
    width:60,
    height:60,
    borderRadius:30,
    marginTop:250
  }
});
