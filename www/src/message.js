
export class Message {
    constructor(id) {
        this.contents = "";
        this.character = null;
    }

    setContents(contents) {
        this.contents = contents;
    }

    setCharacter(character) {
        this.character = character;
    }
}

