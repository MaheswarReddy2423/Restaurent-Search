import React from 'react';
import {Text,View,StyleSheet,FlatList,TouchableOpacity} from "react-native";
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';
const ResultsList = ({title,counts,navigation}) => {
    if(!counts.length)
    {
        return null;
    }
    else
    {
        return (
        
            <View>
                
                <Text style={styles.textStyle}>{title}</Text>
            
               
                <FlatList
                showsHorizontalScrollIndicator = {false}
                horizontal 
                data = {counts}
                keyExtractor = {item => item.id}
                renderItem={(item) => {return(
                    <TouchableOpacity onPress={() => navigation.navigate("Results",{id : item.id})}>
                    <ResultsDetail results = {counts} />
                    </TouchableOpacity>
                )  }}//<Text>{item.name}</Text> 
    
    
                />
                
            </View>
        
            
        )
    }
    
    
};
const styles = StyleSheet.create({
    textStyle : {
        fontSize:30,
        marginLeft:15
    },
    result : {
        marginLeft:15
    }
});
export default withNavigation(ResultsList);