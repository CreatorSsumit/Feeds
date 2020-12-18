import React,{useState,useEffect} from 'react';
import {View,Dimensions,Text,TouchableHighlight,Image,StyleSheet} from "react-native";
import MapView from "react-native-maps"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";

const height = Dimensions.get('window').height

const width = Dimensions.get('window').width

export default function map() {
    
    const [isLoaded] = useFonts({
        "Poppins": require("../../assets/font/Poppins-ExtraBold.ttf"),
        "PoppinsLight":require("../../assets/font/Poppins-Bold.ttf"),
      
      });

    const rg = {
        latitudeDelta:0.015,
        longitudeDelta:0.0121,
        latitude:37.78825,
        longitude: -122.4324
    } 

   
    if (!isLoaded) {
        return <AppLoading />;
      }else {
    return (
    <View >
        <View style={{padding:20}}>
        <MapView  style={styles.mapstyle} loadingEnabled={true} region={rg}></MapView>

        </View>

<View style={{width:width,height:60,backgroundColor:"white",flexDirection:"row",paddingLeft:18,paddingTop:5}}>
<Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://images.unsplash.com/photo-1563306406-e66174fa3787?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
        }}
      />

<View style={{marginLeft:10}}>
    <Text style={{fontFamily:'PoppinsLight',marginTop:6}}>Alina kumari</Text>
   <Text style={{marginTop:-3,fontSize:12}}>Bhopal,Mp</Text>
</View>
<MaterialCommunityIcons style={{position:"absolute",right:10,top:15}} name="dots-vertical" size={24} color="black" />


  
 </View>


<View style={{padding:18}}>
<Image
        style={styles.bigimage}
        source={{
          uri: 'https://images.unsplash.com/photo-1438109491414-7198515b166b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
        }}
      />
</View>

 </View>
    )
      }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
      borderRadius:50
    },
    logo: {
      width: 66,
      height: 58,
    },
    bigimage:{
        width: width-35,
        height: 170,
        borderRadius:20
    },
    mapstyle:{
        height:170,borderRadius:0
    }
  });
