const readline = require('readline');

function isPalindrome(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    // Compare the cleaned string with its reverse
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter a string: ", function(inputString) {
    if (isPalindrome(inputString)) {
        console.log(inputString + " is a palindrome.");
    } else {
        console.log(inputString+" is not a palindrome.");
    }
    rl.close();
});
