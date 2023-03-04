import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import History from "../../assets/History";
import { selectModeStatus } from '../../redux/slices/modes.slice';
import { useSelector } from "react-redux";
import style from "./style";


const Inputs = ({ inputtext , pressfunc, isMainOp = false, curOpt }) => {    
    const mode = useSelector(selectModeStatus);

    return(
        <TouchableOpacity style={[
            style.operation, 
            mode ? isMainOp ? style.mainOperationBackground : style.inputNum : isMainOp ? style.lightMainOperationBackground : style.inputNum
            ]} onPress={pressfunc}>

            {inputtext ? <Text style={style.inputText}>{inputtext}</Text> : <History/>}
        </TouchableOpacity>
    );
}

export default Inputs;