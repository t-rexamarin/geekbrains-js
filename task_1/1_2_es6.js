'use strict';

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    };
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    };
}

let postObj = new Post('автор', 'текст', '11.11.11');
console.log(postObj.text);
postObj.edit('new text');
console.log(postObj.text);

let attachedPost = new AttachedPost('автор2', 'текст2', '22.22.22');
console.log(attachedPost.text);
console.log(attachedPost.highlighted);
attachedPost.edit('text2');
attachedPost.makeTextHighlighted();
console.log(attachedPost.text);
console.log(attachedPost.highlighted);