import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export default StyleSheet.create({

  operation: {
    flex:1, 
    height:'auto', 
    padding:12,
    borderRadius:12,
    justifyContent:'space-between',
    alignItems:'center',
    justifyContent:'center',
    marginRight:2,
    marginLeft:2
  },
  
  inputText: {
    fontSize:33,
    color: colors.defaultColor
  },

  mainOperationBackground: {
    backgroundColor: colors.mainColor,
  },

  inputNum: {
    backgroundColor: colors.numColor
  },

  lightMainOperationBackground: {
    backgroundColor: 'orange'
  }



});