import React, { useState } from 'react';
import { Text, View, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import GalleryScreen from './GalleryScreen';
import DeckScreen from './DeckScreen';
import { createDeck, createImageDir } from './Deck';


global.cardImages = [];
global.activeDeck = [];

const Tab = createMaterialBottomTabNavigator();

createDeck();
createImageDir();

export default function Parent() {
  var count = 5;   
  function increment(){
  count = count+1;
  console.log(count);
}

  return (
    <NavigationContainer>
      <Tab.Navigator      
      activeColor="#ffffff"
      inactiveColor="#aaaaff"
      barStyle={{ backgroundColor: '#888888' }}>
        <Tab.Screen name="Gallery" >        
          {(props) => <GalleryScreen  {...props} updateDeck={increment} />}
        </Tab.Screen>
        <Tab.Screen name="Deck"  >
          {(props) => <DeckScreen  {...props} prp={count} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
// <Tab.Screen name="Deck" component={DeckScreen}  prp='hi'/>
  );
}



