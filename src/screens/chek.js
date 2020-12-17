import React,{useContext} from 'react'
import {View,Button,Text} from "react-native"
import {Notescontext} from "../context/notescontext"

function chek() {

    const {state} = useContext(Notescontext)

    return (
        <View>
   <Text>hello</Text>
        </View>
    )
}

export default chek
