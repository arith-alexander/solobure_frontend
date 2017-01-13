
import {Message} from './message';
import {Character} from './character';

export class App {

    constructor() {
        this.defaultCharacterNum = 3;
        this.defaultCharacterName =["alex","ono","saito"];
        this.defaultCharacterMessageColor =["green","red","blue"];

        this.currentCharacter = 0;
        this.messages = [];
        this.character = [];
        for ( var i=0; i<this.defaultCharacterNum; i++) {
           var character = new Character(i+1,this.defaultCharacterName[i],this.defaultCharacterMessageColor[i]);
           this.character.push(character);
        }
    }

    addMessage(contents) {
        var message = new Message();
        message.setContents(contents);
        this.messages.push(message);
    }

    changeCurrentCharacter() {
        this.currentCharacter++;
        if ( this.currentCharacter > this.character.length ) {
            this.currentCharacter = 0;
        }
    }
}

