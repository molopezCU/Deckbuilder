import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    Text,
    Image,
    ImageBackground,
    Button,
    Pressable,
    Alert,
} from 'react-native';
import { updateDeck } from './Deck';

export default function GalleryScreen(props) {

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
            
            <View style={styles.card}>
                <View>                    
                    <ImageBackground resizeMode='contain' style={styles.cardImage} source={cardImages[0]}></ImageBackground>     
                </View> 
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.leftButton,
                    ]}
                    onPress={() => { updateDeck('-','001');}}
                    >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>     
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.rightButton,
                    ]}
                    onPress={() => { updateDeck('+','001');}}
                    >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>                     
            </View>
            <View style={styles.card}>
                <View>                    
                    <ImageBackground resizeMode='contain' style={styles.cardImage} source={cardImages[1]}></ImageBackground>     
                </View> 
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.leftButton,
                    ]}
                    onPress={() => { updateDeck('-','002');}}
                    >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>     
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.rightButton,
                    ]}
                    onPress={() => { updateDeck('+','002');}}
                    >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>                  
            </View>
            <View style={styles.card}>
                <View>                    
                    <ImageBackground resizeMode='contain' style={styles.cardImage} source={cardImages[2]}></ImageBackground>     
                </View> 
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.leftButton,
                    ]}
                    onPress={() => { updateDeck('-','003');}}
                    >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>     
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.rightButton,
                    ]}
                    onPress={() => { updateDeck('+','003');}}
                    >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>                       
            </View>
            <View style={styles.card}>
                <View>                    
                    <ImageBackground resizeMode='contain' style={styles.cardImage} source={cardImages[3]}></ImageBackground>     
                </View> 
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.leftButton,
                    ]}
                    onPress={() => { updateDeck('-','004');}}
                    >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>     
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.rightButton,
                    ]}
                    onPress={() => { updateDeck('+','004');}}
                    >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>                      
            </View>
            <View style={styles.card}>
                <View>                    
                    <ImageBackground resizeMode='contain' style={styles.cardImage} source={cardImages[4]}></ImageBackground>     
                </View> 
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.leftButton,
                    ]}
                    onPress={() => { updateDeck('-','005');}}
                    >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>     
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.rightButton,
                    ]}
                    onPress={() => { updateDeck('+','005');}}
                    >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>                   
            </View>
            <View style={styles.card}>
                <View>                    
                    <ImageBackground resizeMode='contain' style={styles.cardImage} source={cardImages[5]}></ImageBackground>     
                </View> 
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.leftButton,
                    ]}
                    onPress={() => { updateDeck('-','006');}}
                    >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>     
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.rightButton,
                    ]}
                    onPress={() => { updateDeck('+','006');}}
                    >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>                         
            </View>
            <View style={styles.card}>
                <View>                    
                    <ImageBackground resizeMode='contain' style={styles.cardImage} source={cardImages[6]}></ImageBackground>     
                </View> 
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.leftButton,
                    ]}
                    onPress={() => { updateDeck('-','007');}}
                    >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>     
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.rightButton,
                    ]}
                    onPress={() => { updateDeck('+','007');}}
                    >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>                    
            </View>
            <View style={styles.card}>
                <View>                    
                    <ImageBackground resizeMode='contain' style={styles.cardImage} source={cardImages[7]}></ImageBackground>     
                </View> 
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.leftButton,
                    ]}
                    onPress={() => { updateDeck('-','008');}}
                    >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>     
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.rightButton,
                    ]}
                    onPress={() => { updateDeck('+','008');}}
                    >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>                          
            </View>
            <View style={styles.card}>
                <View>                    
                    <ImageBackground resizeMode='contain' style={styles.cardImage} source={cardImages[8]}></ImageBackground>     
                </View> 
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.leftButton,
                    ]}
                    onPress={() => { updateDeck('-','009');}}
                    >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>     
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.rightButton,
                    ]}
                    onPress={() => { updateDeck('+','009');}}
                    >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>                        
            </View>
            <View style={styles.card}>
                <View>                    
                    <ImageBackground resizeMode='contain' style={styles.cardImage} source={cardImages[9]}></ImageBackground>     
                </View> 
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.leftButton,
                    ]}
                    onPress={() => { updateDeck('-','010');}}
                    >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>     
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.rightButton,
                    ]}
                    onPress={() => { updateDeck('+','010');}}
                    >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>                      
            </View>
            <View style={styles.card}>
                <View>                    
                    <ImageBackground resizeMode='contain' style={styles.cardImage} source={cardImages[10]}></ImageBackground>     
                </View> 
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.leftButton,
                    ]}
                    onPress={() => { updateDeck('-','011');}}
                    >
                    <Text style={styles.buttonText}>-</Text>
                </Pressable>     
                <Pressable
                    style={({pressed}) => [
                        {
                          backgroundColor: pressed ? '#777777' : '#555555',
                        },
                        styles.rightButton,
                    ]}
                    onPress={() => { updateDeck('+','011');}}
                    >
                    <Text style={styles.buttonText}>+</Text>
                </Pressable>                  
            </View>
        </View>
        </ScrollView>
</SafeAreaView>
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
    leftButton: {        
        elevation: 5,
        borderRadius: 8,
        padding: 3,
        height: 50,
        width: 50,
        position: "absolute",
        top: '40%',
        left: 5,
        opacity: .75,
    },
    rightButton: {        
        elevation: 5,
        borderRadius: 8,
        padding: 3,
        height: 50,
        width: 50,
        position: "absolute",
        top: '40%',
        right: 5,
        opacity: .75,
    },
    buttonText: {
        fontSize: 30,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
})