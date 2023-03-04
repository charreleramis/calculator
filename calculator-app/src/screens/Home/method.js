import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import createUser from "../../redux/thunks/createUser";
import createHistory from "../../redux/thunks/createHistory";
import { useEffect, useState } from "react";
import { setAuthRedux } from "../../redux/slices/auth.slice";
import { evaluate } from 'mathjs';
import { useDispatch } from "react-redux";
import { Platform } from "react-native";
import Api from "../../utils/Api";
import axios from "axios";

const method = () => {
    const navigate = useNavigation();
    const [calculation, setCalculation] = useState(null);
    const [operationType, setOperation] = useState(null);
    const [result, setResult] = useState(null);
    const [total, setTotal] = useState(null);
    const [clear, setClear] = useState("AC");

    const dispatch = useDispatch();

    // oregon
    useEffect(() => {
        setCalculation(calculation);  
    },[calculation]);


    useEffect(() => {
        // removeAuth();
        getAuth();
    },[]);


    // useEffect(() => {

    //     const handlePress = async () => {
    //         try {
    //             // const params = { "os": "ios" }
    //             // const response = await Api.get('sample');
    //             // console.log(response.data);

    //             const axiosInstance = axios.create({
    //                 baseURL: 'http://devcalculator1-env.eba-cimfdjv8.us-west-2.elasticbeanstalk.com/app',
    //                 timeout: 5000,
    //                 headers: { 'Authorization': 'Bearer mytoken' }
    //               });

    //               axiosInstance.get('/sample')
    //                 .then(response => {
    //                     console.log(response.data);
    //                 })
    //                 .catch(error => {
    //                     console.error(error);
    //                 });

    //         } catch (error) {
    //           console.error(error);
    //         }
    //       };

    //     handlePress();

    // },[]);

    
    const removeAuth = async (key) => {
        try {
          await AsyncStorage.removeItem("userAuth");
          await AsyncStorage.removeItem("userId");
        } catch (error) {
          console.log(error);
        }
      };



    const setAuth = async (userAuth, userId) => {
        try {
            await AsyncStorage.setItem('userAuth', userAuth.toString());
            await AsyncStorage.setItem('userId', userId.toString());
        } catch (e) {
            console.log(e);
        }
    }

    const getAuth = async () => {
        try {    

            // dispatch(createUser({'os': Platform.OS })).unwrap().then((data) => {
            //     const token = data.user.token;
            //     const uuid = data.user.uuid; 
            //     setAuth(token, uuid);                    
            // });


            const uuid = await AsyncStorage.getItem('userId');
            const token = await AsyncStorage.getItem('userAuth');
            
            console.log('uuid:', uuid);
            console.log('token:', token);

            if(!token) {
                dispatch(createUser({'os': Platform.OS })).unwrap().then((data) => {
                    const token = data.user.token;
                    const uuid = data.user.uuid; 

                    console.log(token)
                    console.log(uuid);
                    setAuth(token, uuid);                    
                });
            } else {
                dispatch(setAuthRedux({ uuid, token}));
            }
        } catch (e) {
            console.log(e);
        }
    }



    const navigateHistory = () => {
        navigate.navigate('History')
    }

    const appendNumbers = (initial) => {
        const appendstr = (result ? result : "" ) + "" + initial;
        if(initial == "." && result?.includes(".")) {
            return 
        } else {
            if(appendstr.length == 2 && appendstr.startsWith("0") && !appendstr.includes(".")) {
                setResult(appendstr[1]);
            } else {
                if(appendstr == ".") {
                    setResult("0"+appendstr);
                } else {
                    setResult(appendstr);
                }
            }            
        }
    }

    
    const operation = async(inputOperation) => {
        setOperation(inputOperation);
        const calc = await calculationOperation(inputOperation);
        if(calc) {
            if(calc[calc.length-1] != inputOperation) {
                setCalculation(calc.substring(0, calc.length - 1) + inputOperation);
            }            
        }
        setResult(null);
    }


    const calculationOperation = async (inputOperation) => {
        if(calculation) {
            if(result) {
                setCalculation(calculation + " " + result + " " + inputOperation);
                return calculation + " " + result + " " + inputOperation
            } else {
                return calculation;
            }
        } else {
            if(result) {
                setCalculation(result + " " + inputOperation);
                return result + " " + inputOperation;
            } else {
                return calculation;
            }
        }
    }

    
    const getTotal = async () => {
        const equation = calculation + " " + (result ? result : "");
        const removeUnusedOptStr = await removeUnusedOpt(equation.replace(/\s/g, "")); 
        const repOpStr = removeUnusedOptStr.replace(/x/g, "*").replace(/÷/g, "/");

        // const total = evaluate(removeUnusedOptStr.replace(/x/g, "*").replace(/÷/g, "/"));

        const total = evaluate(repOpStr);

        console.log('total: ',total);
        setTotal(total);

        dispatch(createHistory({
            "calculation": repOpStr,
            "total": total
        }));

    }




    const removeUnusedOpt = async (equation) => {
        if (equation.endsWith("x") || equation.endsWith("-") || equation.endsWith("+") || equation.endsWith("÷") ) {
            return equation.substring(0, equation.length - 1);
        } else {
            return equation
        }
    }


    const toogleSign = () => {
        if(result) {
            if(result.toString().startsWith("-")) {
                setResult(result.toString().substring(1))
            } else {
                if(result !== "0") {
                    setResult("-"+result);
                }
            }
        }
    
    }

    const allClear = () => {
        setResult(null);
        setCalculation("");
        setOperation(null);
        setTotal(null);
        if(clear == "AC") {
            setClear("C");
        } else {
            setClear("AC");
        }
    }


    const getResultText = () => {
        if(typeof(total) == "number") {
            return total;
        } else {
            if (result) {
                return result
            } else {
                return "0"
            }
        }
    }

    const getModulo = () => {
        const current = getResultText();
        const cur_modulo = current / 100;

        setResult(cur_modulo);
        setTotal(cur_modulo);
    }

    return {
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
    }
}

export default method;