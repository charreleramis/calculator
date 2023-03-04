import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import ScreenContainer from "../../components/ScreenContainer";
import LeftArrow from "../../assets/LeftArrow";
import Trash from "../../assets/Trash";
import style from "./style";
import method from "./method";
import { useSelector } from "react-redux";
import { selectModeStatus } from "../../redux/slices/modes.slice";
import Star from "../../assets/Star";

const History = () => {
    const { clearExistingHistory, navigateBack, markImportant, data } = method();
    const mode = useSelector(selectModeStatus);

    // const data = [
    //     {"calculation": "4 x 2", "result": "90", "timestamp": 1}, 
    //     {"calculation": "4 x 2", "result": "230", "timestamp": 2},
    //     {"calculation": "4 x 2", "result": "230", "timestamp": 3}
    // ]

    // const data = [];

    const getList = () => {
        if(data.length > 0) {
            let listItem = [];
            data.forEach(element => {
                const item = 
                    <View 
                        style={[
                            style.itemContainer, 
                            HeaderAndFooterBorder(element, 0) ? style.itemBorder : null,
                            HeaderAndFooterBorder(element, data.length-1) ? style.itemBorderBottom : null
                        ]}
                        key={element.id}>
                        <View>
                            <Text style={[style.calculation, { marginBottom:8 }]}> {element.calculation} </Text>
                            <Text style={style.calculation}> = {element.total} </Text>
                        </View>
                        
                        <TouchableOpacity onPress={() => markImportant(element)}>
                            <Star style={{ marginRight:15 }} color={element.isimportant? "#FF6600": "#fff" }/>
                        </TouchableOpacity>
                        
                    </View>
                listItem.push(item);
            });
            return listItem;
        } else {
            return (
                <View style={{ backgroundColor:'#3B3D43', height:95, width:'89%', borderRadius:9, alignItems:'center', justifyContent:'center' }}>
                    <Text style={style.calculation}>Empty!</Text>
                    <Text style={style.calculation}>Do some calculations/</Text>
                </View>
            );
        }   
    }


    const HeaderAndFooterBorder = (item, index) => {
        if(item.id == data[index].id) {
            return true;
        } else {
            return false;
        }
    }


    return(
        <ScreenContainer>
            <View style={{ paddingTop:20, alignItems:'center', marginBottom:25, flexDirection:'row', justifyContent:'space-between'}}>
                <TouchableOpacity onPress={navigateBack}>
                    <LeftArrow style={{ marginLeft: 17}}/>
                </TouchableOpacity>
                <Text style={mode ? style.history : style.lighthistory}>History</Text>
                
                <TouchableOpacity onPress={ ()=> clearExistingHistory() }>
                    {/* <Text style={{ color:'#fff', fontSize:18, fontWeight:'600'}}>Delete</Text> */}
                    <Trash style={{ marginRight: 20}}  color={mode ? "#fff" : "#000"} />
                </TouchableOpacity>
            </View>

            <ScrollView>
            <View style={{ alignItems:'center' , height: 'auto' }} >
                
                {getList()}
            </View>
            </ScrollView>
        </ScreenContainer>
    );
}

export default History;