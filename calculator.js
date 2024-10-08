function add(numbers) {
    if (numbers === "") {
        return 0;
    }
    const parts = numbers.split(",");
    return parts.reduce((sum, part) => sum + parseInt(part, 10), 0);
}



module.exports = add;