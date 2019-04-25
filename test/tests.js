import feedCaterpillar from '../src/feed-caterpillar.js';
const test = QUnit.test;

test('Test adding a fruit segment', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const fruitName = 'apple';
    //placeholder for the section that caterpillar lives in
    const div = document.createElement('div');
    const expected = '<span class="part apple"></span>';

    //Act 
    // Call the function you're testing and set the result to a const
    const result = feedCaterpillar(fruitName, div);

    
    //Assert
    assert.equal(result, expected);
});