let readingList = []
exports.readingListEmpty=()=>{
    readingList = []
}

exports.getBook = () => {
    if (readingList.length == 0) return null
    return readingList.map(item =>{
        return  `${item.title} by ${item.author}, ${item.length} pages, ${item.year}, read on ${item.readingDate}, ${item.rating}`;
    }) 
}

exports.addBook = (book, readingData) =>{
    readingList.push({...book, ...readingData})
}

exports.numberRead = () =>{
    return readingList.length;
}

exports.removeBook = (title) =>{
    for(let i in readingList){
        console.log(readingList[i])
        if(readingList[i].title == title){
            readingList.splice(i,1)
        }
    }
}