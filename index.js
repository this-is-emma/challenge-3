function randomNumber() {
    // Write a random number generator module
    return Math.random();
}
function removeSpaces(input) {
    // removes all spaces from a string and replaces them with dashes
    input = input.replace(/\s+/g, '-')
    return input;
}
function todayDate() {
    //return a random date
    let today = new Date().toLocaleDateString()
    return today
}

console.log(randomNumber())
module.exports = {
    randomNumber,
    removeSpaces,
    todayDate
};
