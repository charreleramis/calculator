import { StyleSheet } from "react-native";
import colors from "../../utils/colors";



export default StyleSheet.create({
  header: {
    height: '8%',
    justifyContent:'center',
    alignItems:'flex-end',
    paddingRight: 3
  },
  content: {
    backgroundColor: colors.contentColor, 
    flex: 1,
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },

  lighContent: {
    backgroundColor: "#e5e5e5", 
    flex: 1,
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },

  defaultResult: {
    fontSize: 70, 
    color:'#fff'
  },

  equation: {
    color:'#fff'
  },

  lightEquation: {
    color:'#292A2D'
  },

  lightResult: {
    fontSize: 70, 
    color:'#292A2D'
  },

  resultContainer: {
    flex:1,
    alignItems: "flex-end",
    flexDirection:'column'
  },

  inputForm: {
    padding:30,
    color: colors.inputFormColor, 
    fontSize:40,
    textAlign: 'center',
    height: 30,
    backgroundColor: 'blue'
  }, 

  result: {
    color: colors.defaultColor, 
    fontSize:70,
    textAlign: 'center',
    paddingRight:45
  }, 
  
  inputs: {
    flex:3,
    marginTop:9
  },

  touch: {
    flex:1
  },

  operation: {
    flex:1, 
    height:85, 
    borderRadius:12,
    justifyContent:'space-between',
    alignItems:'center',
    justifyContent:'center',
    marginRight:2,
    marginLeft:2
  },
  
  smallSpace: {
    marginRight:2,
    marginLeft:2
  },

  mainOperationBackground: {
    backgroundColor: colors.mainColor,
  },

  headerOperationBackground: {
    backgroundColor: colors.inputFormColor
  },

  inputNum: {
    backgroundColor: colors.numColor
  },

  inputText: {
    fontSize:33,
    color: colors.defaultColor
  },

  itemContainer: {
    flexDirection:'row',
    marginTop:3

  }



});