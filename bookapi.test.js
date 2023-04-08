const { getBook } = require('./src/readingList')
test('My list to be empty', () => {
    //Arrange
    const assert = null;
    //Act
    const readingList = getBook();
    //Assert
    expect(assert).toBe(readingList);
})

test('add a first book', () => {
    //Arrange
    const book = { title: "Justuju k safr", author: 'Zeeshan ul hassan usmani', length: 345, year: 2021 };
    const assert = 1;
    //Act
    addBook(book, readingDate, rating);
    const result = numberRead();
    //Assert
    expect(assert).toBe(result);

})