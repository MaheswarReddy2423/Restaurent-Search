import React,{ useState} from "react";
import {Text,View, StyleSheet,ScrollView} from "react-native";
import SearchBar from "./components/SearchBar";
import useResults from "./hooks/useResults";
import ResultsList from "./components/ResultsList";
const SearchScreen = () => {
    const [term,setTerm] = useState('');
    const [searchAPi,errMsg,results] = useResults();
    const filterResultsByPrice = (price) => {
            return results.filter(result => {
                return result.price === price ;
            });
    }
    return (
    <>
        <SearchBar term = {term} 
        onChangeTerm = { (newTerm) => setTerm(newTerm)}
        onTermSubmit = {() => {searchAPi(term)}}
        />
       
    
       
        <ScrollView>
        <ResultsList counts={filterResultsByPrice('$')} title="Cost Effective" />
        <ResultsList counts={filterResultsByPrice('$$')} title="Rich" />
        <ResultsList counts={filterResultsByPrice('$$$')} title="Richie Rich" />
        </ScrollView>
        {errMsg?<Text>Something Went Wrong</Text>:null}
    </>
    );
}
const styles = StyleSheet.create({
    textStyle : {
        fontSize:10,
        textAlign:"center"
    },
    title:
    {
        fontSize:20,
        textAlign:"center"
    }
});
export default SearchScreen;