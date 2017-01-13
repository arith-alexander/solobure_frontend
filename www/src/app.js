
import {Message} from './message';
import {Character} from './character';

export class App {

    constructor() {
        this.defaultCharacterNum = 3;
        this.defaultCharacterName =["alex","ono","saito"];
        this.defaultCharacterMessageColor =["green","red","bule"];

        this.messages = [];
        this.character = [];
        for ( var i=0; i<this.defaultCharacterNum; i++) {
           var caharcter = new Character(i+1,this.defaultCharacterName[i],this.defaultMessageCharacterColor[i]);
           this.character.push(charecter);
        }
    }

    addMessage(contents) {
        var message = new Message();
        message.setContents(contents);
        this.messages.push(message);
    }

    updateCharacter(id,name,messageColor) {
        this.character[id].updateInfo(name,messageColor);
    }

}

