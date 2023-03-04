import { useDispatch } from "react-redux";
import { changeMode } from "../../redux/slices/modes.slice";

const method = () => {
    const dispatch = useDispatch();

    const updateMode = (isDarkMode) => {
        dispatch(changeMode(isDarkMode));
    }

    return {
        updateMode
    }
}

export default method;