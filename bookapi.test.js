const {getBook} = require('./src/readingList')
test('My list to be empty',()=>{
    //Arrange
    const assert = null;
    //Act
    const readingList = getBook();
    //Assert
    expect(assert).toBe(readingList);
})