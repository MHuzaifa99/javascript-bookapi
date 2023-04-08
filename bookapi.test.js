let { getBook, addBook, numberRead, removeBook, readingListEmpty } = require('./src/readingList')
test('My list to be empty', () => {
    //Arrange
    const assert = null;
    //Act
    const readingList = getBook();
    //Assert
    expect(readingList).toBe(assert);
})

test('add a first book', () => {
    //Arrange
    const book = { title: "Justuju k safr", author: 'Zeeshan ul hassan usmani', length: 345, year: 2021 };
    const readingData = {readingDate: "April 8, 2022", rating: 5};
    const assert = 1;
    //Act
    addBook(book, readingData);
    const result = numberRead();
    //Assert
    expect(result).toBe(assert);

})

test('add additional book', () =>{
    //Arrange
    readingListEmpty()
    const book = { title: "Justuju k safr", author: 'Zeeshan ul hassan usmani', length: 345, year: 2021 };
    const readingData = {readingDate: "April 8, 2022", rating: 5};
    const book1 = { title: "Dastan Iman Faroosho ki", author: 'Altamash', length: 1500, year: 2005 };
    const readingData1 = {readingDate: "April 8, 2020", rating: 5};
    const assert = 2;
    //Act
    addBook(book, readingData);
    addBook(book1, readingData1);
    const result = numberRead();
    //Assert
    expect(result).toBe(assert);

})

test('remove book from reading list', () =>{
    // Arrange
    readingListEmpty();
    const book = { title: "Justuju k safr", author: 'Zeeshan ul hassan usmani', length: 345, year: 2021 };
    const readingData = {readingDate: "April 8, 2022", rating: 5};
    const book1 = { title: "Dastan Iman Faroosho ki", author: 'Altamash', length: 1500, year: 2005 };
    const readingData1 = {readingDate: "April 8, 2020", rating: 5};
    const title = "Justuju k safr";
    const assert = new Array("Dastan Iman Faroosho ki by Altamash, 1500 pages, 2005, read on April 8, 2020, 5")
    // Act
    addBook(book, readingData);
    addBook(book1, readingData1);
    removeBook(title)
    const result = getBook();
    // Assert
    expect(result).toStrictEqual(assert);
})