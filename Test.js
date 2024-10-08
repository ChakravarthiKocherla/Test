const add = require('./calculator'); 

function testAdd() {

    console.assert(add("") === 0, "Test failed: empty string should return 0");
    
    console.log("All tests passed!");
    
}

testAdd();
