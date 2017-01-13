
import {Message} from './message';
import {Character} from './character';

export class App {

    constructor() {
        this.defaultCharacterNum = 3;
        this.defaultCharacterName =["alex","ono","saito"];
        this.defaultCharacterMessageColor =["green","red","blue"];

        this.input_text = "";
        this.messages = [];
        this.currentCharacter = 0;
        this.character = [];
        for ( var i=0; i<this.defaultCharacterNum; i++) {
           var character = new Character(i+1,this.defaultCharacterName[i],this.defaultCharacterMessageColor[i]);
           this.character.push(character);
        }
    }

    addMessage(input_text) {
        if(!input_text) {
            return;
        }
        var message = new Message();
        message.setContents(input_text);
        this.messages.push(message);
        this.input_text = "";
    }

    changeCurrentCharacter() {
        this.currentCharacter++;
        if ( this.currentCharacter > this.character.length ) {
            this.currentCharacter = 0;
        }
    }
}

