const add = require('./calculator'); 

function testAdd() {

    console.assert(add("") === 0, "Test failed: empty string should return 0");

    console.assert(add("1") === 1, "Test failed: '1' should return 1");

    console.assert(add("1,5") === 6, "Test failed: '1,5' should return 6");

    console.log("All tests passed!");
    
}

testAdd();
