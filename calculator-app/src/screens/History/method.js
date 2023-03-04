import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getHistory from "../../redux/thunks/getHistory";
import clearHistory from "../../redux/thunks/clearHistory";
import { selectHistoryData, updateHistory, emptyHistory } from "../../redux/slices/history.slice";
import markHistory from "../../redux/thunks/markHistory";

const method = () => {
    const navigate = useNavigation();
    const dispatch = useDispatch();
    // const [data, setData] = useState([]);
    const data = useSelector(selectHistoryData);


    useEffect(() => {
        // dispatch(getHistory()).unwrap().then(resp => {
        //     console.log('resp:', resp);
        //     setData(resp)
        // });

        dispatch(getHistory());

    },[]);
    

    const clearExistingHistory = () => {
        dispatch(emptyHistory())
        dispatch(clearHistory());

    }
    
    const navigateBack = () => {
        navigate.goBack();
    }

    const markImportant = async (element) => {
        if(element.isimportant) {
            element.isimportant = false;
        } else {
            element.isimportant = true;
        }

        dispatch(markHistory({ isimportant: element.isimportant, historyId: element.id })).unwrap().then(sts => {
            dispatch(getHistory());
        });

    }

    return {
        clearExistingHistory,
        navigateBack,
        markImportant,
        data
    }
}

export default method;