import React,{useEffect,useState} from 'react';
import {View,Text,Dimensions,SafeAreaView,StatusBar,ScrollView} from "react-native";
import { Ionicons,MaterialCommunityIcons,MaterialIcons,Entypo } from '@expo/vector-icons';
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import Maps from "./map"


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

export default function home() {

    const [isLoaded] = useFonts({
        "Poppins": require("../../assets/font/Poppins-ExtraBold.ttf"),
        "PoppinsLight":require("../../assets/font/Poppins-Bold.ttf"),
      
      });

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
    
    if (!isLoaded) {
        return <AppLoading />;
      }else {
    return (
        <SafeAreaView>
        <View style={{width:dimensions.window.width,height:70,backgroundColor:"white",flexDirection:"row",position:"relative",marginTop:StatusBar.currentHeight}}>
          <View style={{width:dimensions.window.width/2,backgroundColor:"white",height:70,padding:20,flexDirection:"row"}}>
          <Ionicons name="ios-arrow-back" size={30} color="black" style={{marginTop:3}} />
          <Text style={{fontSize:24, fontFamily:'Poppins',fontWeight:"normal",marginLeft:30}}>Feed</Text>
          </View>
          <View style={{width:dimensions.window.width/2,backgroundColor:"white",height:70,flexDirection:"row",paddingTop:25,justifyContent:"flex-end",paddingRight:10 }}>
          <MaterialIcons name="notifications-none" size={28} color="black" style={{marginRight:10}} />
          <Ionicons name="md-search" size={28} color="black" style={{marginRight:10}} />
          <MaterialCommunityIcons name="menu-open" size={28} color="black" style={{marginRight:10}} />
          </View>
          

        </View>
        
        <ScrollView horizontal={true}>

  <Text style={{fontFamily:'Poppins',paddingBottom:0,paddingTop:10,marginLeft:30,borderBottomWidth:2,borderBottomColor:"#31B2DB"}}>Home</Text>
  <Text style={{fontFamily:'PoppinsLight',color:"#777777",paddingBottom:0,paddingTop:10,marginLeft:20,opacity:0.6}}>Citywide</Text>
  <Text style={{fontFamily:'PoppinsLight',color:"#777777",paddingBottom:0,paddingTop:10,marginLeft:16,opacity:0.6}}>News</Text>
  <Text style={{fontFamily:'PoppinsLight',color:"#777777",paddingBottom:0,paddingTop:10,marginLeft:16,opacity:0.6}}>Events</Text>
  <Text style={{fontFamily:'PoppinsLight',color:"#777777",paddingBottom:0,paddingTop:10,marginLeft:16,opacity:0.6}}>Offering</Text>

</ScrollView>

<Text style={{fontFamily:'Poppins',paddingBottom:0,paddingTop:30,marginLeft:30}}>Your Location</Text>
 
        <Maps />

       
        </SafeAreaView>
    ) }
}
