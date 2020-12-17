import React,{useContext,useEffect} from 'react'
import {View,Text,Button,StyleSheet,FlatList} from "react-native"
import {Notescontext} from "../context/notescontext"
import Ckeck from "./chek"

function listnotesscreen() {
    const {state,dispatch}= useContext(Notescontext)


    console.log(state)
    return (
     <View>
         <Button title="Add" onPress={()=>dispatch({type:"ADD"})} />
         

<FlatList data={state} renderItem={({item})=>{
  return  <Text>{item.title}</Text>
}} keyExtractor={item=>item.title} />

          <Ckeck />
        
      
     </View>
    )
}

export default listnotesscreen
