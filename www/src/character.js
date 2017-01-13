
export class Character {
    constructor(id,name,messageColor) {
        this.id = id;
        this.name = name;
        this.messageColor = messageColor;
    }

    setName(name) {
        this.name = name;
    }

    setMessageColor(messageColor) {
        this.messageColor = messageColor;
    }
}

