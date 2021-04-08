import {StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: 60,
    width:'100%',
  },
  headingText: {
    width:'100%',
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
  },
  appIcon: {
    width: 250,
    height:200,
    resizeMode: 'stretch',
    zIndex:2
  },
  appIconWith: {
    position:'absolute',
    top:'35%',
    left:'35%',
    width: 220,
    height:230,
    resizeMode: 'stretch',
    zIndex:2
  },
  appIconWith_1: {
    position:'absolute',
    top:'35%',
    width: 200,
    height:230,
    resizeMode: 'stretch',
    zIndex:2
  },
  appIconWith_2: {
    position:'absolute',
    top:'35%',
    width: 150,
    height:230,
    resizeMode: 'stretch',
    zIndex:2
  },
  appIcon_2: {
    width: 300,
    height:300,
    resizeMode: 'stretch',
    zIndex:2
  },
  introductionText: {
    width:'65%',
    textAlign:'center',
    fontSize:18,
    marginTop:10,
    marginBottom:50,
    color: '#8E8E93'
  },
  introductionText_1: {
    width:'100%',
    textAlign:'center',
    fontSize:18,
    marginTop:10,
    marginBottom:50,
    color: '#8E8E93'
  },
  button: {
    backgroundColor:'#3963A2',
    borderRadius:5,
    borderColor:"#3963A2"
  },
  btnText: {
    fontFamily : 'PingFangSC-regular',
  },
  loginMethodContainer: {
    padding: 21,
    paddingBottom: 35,
    marginTop: 100
  },
  bottomCarousel_3: {
    width: '15%',
    height:10,
    // borderWidth:2,
    // borderColor: "#000",
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    position:'absolute',
    bottom:20,
  },
  firstPiece_3: {
    width:'30%',
    height:'100%',
    // backgroundColor:'#000',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  secondPiece_3: {
    width:'30%',
    height:'100%',
    // backgroundColor:'#0f0',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  thirdPiece_3: {
    width:'30%',
    height:'100%',
    backgroundColor:"rgba(85, 77, 132, 100)",
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    borderRadius:5
  },
  fPiece_3:{
    width:'50%',
    height:"100%",
    backgroundColor:"rgba(229, 229, 234, 100)",
    borderRadius:3,
  },
  sPiece_3:{
    width:'50%',
    height:"100%",
    backgroundColor:"rgba(229, 229, 234, 100)",
    borderRadius:3,
  },
  //first carousel(small)
  
  bottomCarousel_1: {
    width: '15%',
    height:10,
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    position:'absolute',
    bottom:20,
  },
  firstPiece_1: {
    width:'30%',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"rgba(85, 77, 132, 100)",
    borderRadius:5,
  },
  secondPiece_1: {
    width:'30%',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  thirdPiece_1: {
    width:'30%',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  tPiece_1:{
    width:'50%',
    height:"100%",
    backgroundColor:"rgba(229, 229, 234, 100)",
    borderRadius:3,
  },
  sPiece_1:{
    width:'50%',
    height:"100%",
    backgroundColor:"rgba(229, 229, 234, 100)",
    borderRadius:3,
  },

  //second carousel(small)
  
  bottomCarousel_2: {
    width: '15%',
    height:10,
    // borderWidth:2,
    // borderColor: "#000",
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    position:'absolute',
    bottom:20,
  },
  firstPiece_2: {
    width:'30%',
    height:'100%',
    // backgroundColor:'#000',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  secondPiece_2: {
    width:'30%',
    height:'100%',
    // backgroundColor:'#0f0',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"rgba(85, 77, 132, 100)",
    borderRadius:5,
  },
  thirdPiece_2: {
    width:'30%',
    height:'100%',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
  },
  fPiece_2:{
    width:'50%',
    height:"100%",
    backgroundColor:"rgba(229, 229, 234, 100)",
    borderRadius:3,
  },
  tPiece_2:{
    width:'50%',
    height:"100%",
    backgroundColor:"rgba(229, 229, 234, 100)",
    borderRadius:3,
  }

});
