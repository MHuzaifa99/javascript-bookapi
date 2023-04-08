let readingList = []
exports.readingListEmpty=()=>{
    readingList = []
}

exports.getBook = () => {
    if (readingList.length == 0) return null
    return bookFormat(readingList)
    // readingList.map(item =>{
    //     return  `${item.title} by ${item.author}, ${item.length} pages, ${item.year}, read on ${item.readingDate}, ${item.rating}`;
    // }) 
}

exports.addBook = (book, readingData) =>{
    readingList.push({...book, ...readingData})
}

exports.numberRead = () =>{
    return readingList.length;
}

exports.removeBook = (title) =>{
    for(let i in readingList){
        if(readingList[i].title == title){
            readingList.splice(i,1)
        }
    }
}

exports.getBookByRating = (rating) =>{
    let arr = []
    for(let i in readingList){
        if(readingList[i].rating == rating){
            arr.push(readingList[i])
        }
    }
    return bookFormat(arr);
}

let bookFormat = (arr) =>{
    return arr.map(item =>{
        return  `${item.title} by ${item.author}, ${item.length} pages, ${item.year}, read on ${item.readingDate}, ${item.rating}`;
    })
}

