// class ReadingList{
//     static title;
//     static author;
//     static length;
//     static year;
//     static readingList = [];

//     constructor(title, author, length, year){
//         this.title = title;
//         this.author = author;
//         this.length = length;
//         this.year = year
//     }

//     getBook(){
//         if(this.readingList.length == 0) return null
//         return this.readingList;
//     }
// }

var readingList = []
let title;
let author;
let length;
let year;

exports.getBook = () => {
    if (readingList.length == 0) return null
    return readingList;
}


// module.exports = ReadingList;