import  React ,{useState,useEffect} from 'react';
import { Text, View,TouchableOpacity,TouchableNativeFeedback,Dimensions} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons,MaterialIcons,AntDesign,Entypo ,MaterialCommunityIcons} from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Home from "./src/conatiner/home"



const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function HomeScreen(props) {

  const navigation = useNavigation();
  return (
    <View style={{backgroundColor:"white",flex:1}}>
      <Home />
   </View>
  );
}



 function App() {

  const [dimensions, setDimensions] = useState({ window, screen });

  const onChange = ({ window, screen }) => {
    setDimensions({ window, screen });
  };


  useEffect(() => {
    Dimensions.addEventListener("change", onChange);
    return () => {
      Dimensions.removeEventListener("change", onChange);
    };
  });
  return (
     <NavigationContainer>
    <Stack.Navigator headerMode={'none'}>
    <Stack.Screen name="Home" component={HomeScreen} />
   
  
    
  </Stack.Navigator>

<View style={{width:dimensions.window.width-18,marginLeft:9,backgroundColor:"#1e74ff",height:70,position:"absolute",bottom:2,flexDirection:'row',justifyContent:"space-between"}}>
 <View style={{backgroundColor:'#1e74ff',width:dimensions.window.width/5 , height: 100,flex:1,justifyContent:"center",alignItems:"center",paddingBottom:30}}>
 <TouchableOpacity activeOpacity={0.2}><AntDesign name="home" size={30} color="white" /></TouchableOpacity>
 </View>
 <View style={{backgroundColor:'#1e74ff',width: dimensions.window.width/5, height: 100,flex:1,justifyContent:"center",alignItems:"center",paddingBottom:25}}>
 <TouchableOpacity><MaterialIcons name="people-outline" size={30} color="#b7b7b7" /></TouchableOpacity>
 </View>
 <View style={{backgroundColor:'#1e74ff',width: dimensions.window.width/5 , height: 100,alignItems:"center"}}>
  
<View style={{width:70,height:70,borderRadius:60,backgroundColor:"#1e74ff",position:"absolute",bottom:50,right:0.5}}>
  
</View>

<View style={{justifyContent:"center",alignItems:"center" ,backgroundColor:"#efefef",marginTop:-14,width:50,height:50,borderRadius:50,borderWidth:4,borderColor:"#4f8ff7"}}>
   <TouchableOpacity><MaterialIcons name="add" size={30} color="#1e74ff" /></TouchableOpacity>
   </View> 
 </View>
 <View style={{backgroundColor:'#1e74ff',width: dimensions.window.width/5, height: 100,position:"relative",flex:1,justifyContent:"center",alignItems:"center",paddingBottom:30}}>
  <TouchableOpacity><Entypo name="shop" size={30} color="#b7b7b7" /></TouchableOpacity>
 </View>
 <View style={{backgroundColor:'#1e74ff',width: dimensions.window.width/5, height: 100,flex:1,justifyContent:"center",alignItems:"center",paddingBottom:25}}>
 <TouchableOpacity><MaterialCommunityIcons name="account" size={30} color="white" /></TouchableOpacity>
 </View>
</View>

  </NavigationContainer>

   


  );
}


export default App;