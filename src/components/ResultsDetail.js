import React from "react";
import { StyleSheet,View,Text,Image,ScrollView } from "react-native";

const ResultsDetail = ({results}) => {
    return(
        
        <View style = {styles.container}>
            <Image style={styles.Image} source={{uri : results.image_url}} />
            <Text style = {styles.textSTyle}>{results.name}</Text>
            <Text style={styles.ratingsText}>{results.rating} Stars and {results.review_count} Reviews</Text>

        </View>
        
        

    )
    
    
    
   
}
const styles = StyleSheet.create({
    textSTyle : {
        fontWeight:'bold',
        fontSize:16
    },
    Image : {
        height : 120,
        width : 200,
        borderRadius : 5,
        marginBottom : 10
    },
    container : {
        marginLeft : 15
    },
    ratingsText : {
        marginBottom : 10
    }

});
export default ResultsDetail;