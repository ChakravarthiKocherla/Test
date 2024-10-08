function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    let delimiter = /,|\n/;
    if (numbers.startsWith("//")) {
        const delimiterLineEnd = numbers.indexOf("\n");
        delimiter = new RegExp(numbers.substring(2, delimiterLineEnd));
        numbers = numbers.substring(delimiterLineEnd + 1);
    }
    const parts = numbers.split(delimiter);
    return parts.reduce((sum, part) => sum + parseInt(part, 10), 0);
}



module.exports = add;