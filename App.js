import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack"
import NotesList from "./src/screens/listnotesscreen"
import {Notescontext,NotesProvider} from "./src/context/notescontext"

const Stack = createStackNavigator()

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="noteslist" component={NotesList}
         options={{
           headerTitleAlign:"center",
           title:"All Notes"
         }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ()=>{
  return (
   <NotesProvider>
        <App  />
   </NotesProvider>
 
  )
}