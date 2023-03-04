import React from "react";
import { Text, TouchableOpacity, View, Button } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";
import Burger from "../../assets/Burger";
import History from "../../assets/History";
import Inputs from "../../components/Inputs";
import LightDarkSwitch from "../../components/LightDarkSwitch";
import style from "./style";
import method from "./method";
import { useSelector } from "react-redux";
import { selectModeStatus } from "../../redux/slices/modes.slice";

const Home = () => {
    const mode = useSelector(selectModeStatus);
    const { 
        navigateHistory, 
        appendNumbers, 
        toogleSign, 
        allClear, 
        operation,
        getTotal,
        getResultText,
        getModulo,
        calculation, 
        result,
        clear,
        total,
        operationType
    } = method();

    const longEq = () => {
        if(calculation) {
            if(calculation.length >= 16) {
                return { fontSize: 25 }
            } 
        }
        return { fontSize: 40 }
    }



    return (
        <ScreenContainer>
            <View style={style.header}>
                <LightDarkSwitch/>

            </View>
            <View style={mode ? style.content : style.lighContent}>
          
                <View style={{ height: 'auto', width: '100%', alignItems:'flex-end', padding:20 }}>
                    <Text style={[longEq(), mode ? style.equation : style.lightEquation]}>{calculation ? calculation : ""} {result}</Text>
                </View>

                <View style={{ height: 'auto', width: '100%', alignItems:'flex-end', padding:20 }}>
                    {/* <Text style={{ fontSize: 70, color:'#fff'}}>{result ? result : "0"}</Text> */}
                    <Text style={mode ? style.defaultResult : style.lightResult}>{getResultText()}</Text>
                </View>



                <View style={style.inputs}>
                    <View style={style.itemContainer}>
                        <Inputs inputtext={clear} pressfunc={() => allClear()} />
                        <Inputs inputtext={"+/-"} pressfunc={() => toogleSign() }/>
                        <Inputs inputtext={"%"} pressfunc={() => getModulo() }/>
                        <Inputs inputtext={"÷"} pressfunc={() => operation("÷")} isMainOp={true}/>
                    </View>

                    <View style={style.itemContainer}>
                        <Inputs inputtext={"7"} pressfunc={() => appendNumbers("7")}/>
                        <Inputs inputtext={"8"} pressfunc={() => appendNumbers("8")}/>
                        <Inputs inputtext={"9"} pressfunc={() => appendNumbers("9")}/>
                        <Inputs inputtext={"x"} pressfunc={() => operation("x")} isMainOp={true}/>
                    </View>

                    <View style={style.itemContainer}>
                        <Inputs inputtext={"4"} pressfunc={() => appendNumbers("4")}/>
                        <Inputs inputtext={"5"} pressfunc={() => appendNumbers("5")}/>
                        <Inputs inputtext={"6"} pressfunc={() => appendNumbers("6")}/>
                        <Inputs inputtext={"-"} pressfunc={() => operation("-")} isMainOp={true}/>
                    </View>
                    

                    <View style={style.itemContainer}>
                        <Inputs inputtext={"1"} pressfunc={() => appendNumbers("1")}/>
                        <Inputs inputtext={"2"} pressfunc={() => appendNumbers("2")}/>
                        <Inputs inputtext={"3"} pressfunc={() => appendNumbers("3")}/>
                        <Inputs inputtext={"+"} pressfunc={() => operation("+")} isMainOp={true}/>
                    </View>


                    <View style={style.itemContainer}>
                        <Inputs inputtext={"."} pressfunc={() => appendNumbers(".")}/>
                        <Inputs inputtext={"0"} pressfunc={() => appendNumbers("0")}/>
                        <Inputs inputtext={""} pressfunc={navigateHistory}/>
                        <Inputs inputtext={"="} isMainOp={true} pressfunc={() => getTotal()} />
                    </View>

                </View>
            </View>
        </ScreenContainer>
    );
}

export default Home;