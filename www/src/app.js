
import {Message} from './message';
import {Character} from './character';

export class App {

    constructor() {
        this.defaultCharacterNames =["alex","ono","saito"];
        this.defaultCharacterMessageColors =["green","red","blue"];

        this.input_text = "";
        this.messages = [];
        this.currentCharacter = 0;
        this.characters = [];
        for ( var i=0; i<this.defaultCharacterNames.length; i++) {
           var character = new Character(i,this.defaultCharacterNames[i],this.defaultCharacterMessageColors[i]);
           this.characters.push(character);
        }
    }

    addMessage(input_text, author) {
        if(!input_text) {
            return;
        }
        var message = new Message();
        message.setContents(input_text);

        message.setCharacter(this.characters[author]);
        this.messages.unshift(message);
        this.input_text = "";
    }

    changeCurrentCharacter(character_id) {
        this.currentCharacter = character_id;
    }
}

