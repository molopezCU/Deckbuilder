import { setStatusBarBackgroundColor } from 'expo-status-bar';
import { useIsFocused, useFocusEffect   } from '@react-navigation/native';
import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    ImageBackground,
    Text,
    Pressable,
} from 'react-native';
import {UpdateDeck, getDeck, }from './Deck' ;

function disImage(img){
    console.log(img);

    return(
        <View style={styles.card}>
            <View>                   
            <ImageBackground resizeMode='contain' style={styles.cardImage} source={img}/>
                      </View> 
                    </View> )  
}

export default function DeckScreen({prp}) {
    useIsFocused();
    var deck  = getDeck();
    var deckImages=[];   
    console.log(deck.length);
     for (let i = 0; i < deck.length; i++) {
        console.log(deck[i]);
         deckImages.push(cardImages[deck[i]-1]);
         }
         console.log('deck = '+activeDeck);
         console.log('deckImages = '+deckImages);

        return (
            <SafeAreaView 
                style={{
                    backgroundColor: 'grey',
                    flex:1,
                }}>
                    <ScrollView>
                <View
                style={{
                    flex:1,
                    flexDirection: "row",
                    flexWrap: "wrap",
                }}>
                     
                     {deckImages.map(disImage)  }
                
            </View>
            </ScrollView>
            </SafeAreaView> 
    //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //     <Text>Deck</Text>
    //   </View>
    );
  }
  const styles =StyleSheet.create({
    card: {        
        width: "50%",
        height: undefined,
    },
    cardImage: {
        width: undefined,
        height: undefined,
        aspectRatio: .7,
        resizeMode:'contain'
    },
    })