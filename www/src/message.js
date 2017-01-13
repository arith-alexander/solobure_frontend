
export class Message {
    constructor(id) {
        this.contents = "";
        this.character = null;
    }

    setContents(contents) {
        this.contents = contents;
    }

    setCharacer(character) {
        this.character = character;
    }
}

