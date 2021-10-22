'use strict';

function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text;
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date)
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype.constructor = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function() {
    this.highlighted = true;
};

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