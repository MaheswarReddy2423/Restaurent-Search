import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import SearchScreen from "./src/SearchScreen";
import ResultsShowScreen from './src/ResultsShowScreen';
const navigator = createStackNavigator(
  {
    Search : SearchScreen,
    Results : ResultsShowScreen
  },
  {
    initialRouteName : "Search",
    defaultNavigationOptions :{
      title : "Restaurent Search",
    }
  }
);
export default createAppContainer(navigator);