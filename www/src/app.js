
import {Message} from './message';

export class App {

    constructor() {
        this.input_text = "";
        this.messages = [];

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

}

