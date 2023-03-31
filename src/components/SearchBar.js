import React from "react";
import {TextInput,View, StyleSheet} from "react-native";
import { Feather } from "@expo/vector-icons";
const SearchBar = ({term, onChangeTerm, onTermSubmit}) => {
    return (
    <View style={styles.backgroundStyle}>
        <Feather name="search" style = {styles.iconStyle}/>
        <TextInput 
        style={styles.inputStyle} 
        placeholder="Search" 
        value = {term}
        onChangeText = {onChangeTerm}
        onEndEditing= {onTermSubmit}
        />
    </View>
    );
}
const styles = StyleSheet.create({
    textStyle : {
        fontSize:30,
        textAlign:"center"
    },
    backgroundStyle :{
        marginTop : 10,
        backgroundColor : '#EDE9D5',
        height : 50,
        borderRadius:5,
        marginHorizontal : 15,
        flexDirection : 'row'
    },
    inputStyle : {
        fontSize : 18,
        flex : 1
    },
    iconStyle : {
        fontSize : 35,
        alignSelf : "center"
    }
});
export default SearchBar;