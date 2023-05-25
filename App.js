import { StatusBar } from 'expo-status-bar';
import Pessoa from './src/Pessoa';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [feed, setFeed]= useState([
    {id: '1', nome:'Limão', idade: 20, email: 'limaopepper@gmail.com'},
    {id: '2', nome:'Peppa Pig', idade: 15, email: 'peppo@gmail.com'},
    {id: '3', nome:'Tomas Shelby', idade: 40, email: 'intimidador@gmail.com'},
    {id: '4', nome:'Goku', idade: 35, email: 'loiromorenocarecacabeludo@gmail.com'},
    {id: '5', nome:'Naruto', idade: 18, email: 'sasuke@gmail.com'},
    {id: '6', nome:'Mike Kile', idade: 35, email: 'buiatchaka@gmail.com'},
  ])
  return (

// se voce receber um _id, favor colocar no flatlist: keyExtractor={ (item) => item._id}
    <View style={styles.container}>
      <FlatList showsVerticalScrollIndicator={false} data={feed} renderItem={ ({item} )=> <Pessoa data={item}/> }/>
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,

  }
});