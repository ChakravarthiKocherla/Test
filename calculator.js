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
    const numbersList = parts.map(part => parseInt(part, 10));
    const negatives = numbersList.filter(num => num < 0);

    if (negatives.length > 0) {
        throw new Error(`negative numbers not allowed: ${negatives.join(", ")}`);
    }

    return numbersList.reduce((sum, num) => sum + num, 0);
}




module.exports = add;