
import {Message} from './message';

export class App {

    constructor() {
        this.messages = [];

    }

    addMessage(contents) {
        var message = new Message();
        message.setContents(contents);
        this.messages.push(message);
    }

}

