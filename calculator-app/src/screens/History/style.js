import { StyleSheet } from "react-native";
import colors from "../../utils/colors";

export default StyleSheet.create({

  content: {
    backgroundColor: colors.contentColor, 
    flex: 1,
    borderTopRightRadius:20,
    borderTopLeftRadius:20,
    padding:20
  },

  calculation: {
    color: colors.defaultColor, 
    fontSize:16, 
    fontWeight:'600',
  },

  itemContainer: {
    backgroundColor: colors.inputFormColor,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingLeft:20,
    paddingBottom:20,
    paddingTop:20,
    width:'90%',
    marginBottom:0.6
  },

  itemBorder: {
    borderTopLeftRadius:15,
    borderTopRightRadius:15
  },

  itemBorderBottom: {
    borderBottomLeftRadius:15,
    borderBottomRightRadius:15
  },

  history: {
    fontSize:18, 
    fontWeight:'600',
    color:'#fff'
  },

  lighthistory: {
    fontSize:18, 
    fontWeight:'600'
  }


});