const add = require('./calculator'); 

function testAdd() {

    console.assert(add("") === 0, "Test failed: empty string should return 0");

    console.assert(add("1") === 1, "Test failed: '1' should return 1");

    console.assert(add("1,5") === 6, "Test failed: '1,5' should return 6");

    console.assert(add("1,2,3") === 6, "Test failed: '1,2,3' should return 6");

    console.assert(add("1,2,3,4,5") === 15, "Test failed: '1,2,3,4,5' should return 15");

    console.assert(add("1\n2,3") === 6, "Test failed: '1\\n2,3' should return 6");

    console.assert(add("//;\n1;2") === 3, "Test failed: '//;\\n1;2' should return 3");

    try {
        add("1,-2,3");
    } catch (e) {
        console.assert(e.message === "negative numbers not allowed: -2", "Test failed: should throw error with -2");
    }
    
    try {
        add("1,-2,-3");
    } catch (e) {
        console.assert(e.message === "negative numbers not allowed: -2, -3", "Test failed: should throw error with -2, -3");
    }
    

    console.log("All tests passed!");
    
}

testAdd();
