import React from 'react';
import {
    Text,
} from 'react-native';

export function createImageDir(){ 
    cardImages.push(require('./assets/Cards/WXDi-D01-001.jpg'))
    cardImages.push(require('./assets/Cards/WXDi-D01-002.jpg'))
    cardImages.push(require('./assets/Cards/WXDi-D01-003.jpg'))
    cardImages.push(require('./assets/Cards/WXDi-D01-004.jpg'))
    cardImages.push(require('./assets/Cards/WXDi-D01-004.jpg'))
    cardImages.push(require('./assets/Cards/WXDi-D01-004.jpg'))
    cardImages.push(require('./assets/Cards/WXDi-D01-004.jpg'))
    cardImages.push(require('./assets/Cards/WXDi-D01-004.jpg'))
    cardImages.push(require('./assets/Cards/WXDi-D01-004.jpg'))
    cardImages.push(require('./assets/Cards/WXDi-D01-004.jpg'))
    cardImages.push(require('./assets/Cards/WXDi-D01-004.jpg'))
    console.log('cardImages = '+cardImages);
}

export function createDeck(){
    console.log({activeDeck});
    activeDeck = [];
}
    

export function getDeck() {
  return(activeDeck);
}


export function updateDeck(change, cardNum) {
    let deckLength = activeDeck.length;
    let numInDeck = 0;
    if(change == '+'){        
        for (let i = 0; i < deckLength; i++) {
            if (activeDeck[i] == cardNum){
            numInDeck++;
            }            
        }
        if (numInDeck < 4){activeDeck.push(cardNum);}
    }
    else if (change =='-'){        
        console.log(cardNum);
        for (let i = 0; i < deckLength; i++) {
            if (activeDeck[i] == cardNum){
                activeDeck.splice(i, 1);
                break;
            }
        }
    }
    activeDeck.sort();
    console.log(activeDeck);
    return
}