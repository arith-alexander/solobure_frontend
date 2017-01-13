
export class Character {
    constructor(id,name,messageColor) {
        this.id = id;
        this.name = name;
        this.messageColor = messageColor;
    }

    updateInfo(name,messageColor) {
        this.name = name;
        this.messageColor = messageColor;
    }

}

