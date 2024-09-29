import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from "react-navigation-stack";
import HomeScreen from "./screens/HomeScreen";
import VideoScreen from "./screens/VideoScreen";


const HomeStack = createStackNavigator({
    Home :HomeScreen,
    Video: VideoScreen
});

const Tab = createBottomTabNavigator({HomeStack});

export default createAppContainer(Tab);