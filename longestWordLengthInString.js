const findLongestWordLength = str => {
    let maxLength = 0;
    let strArray = str.split(' ');
    strArray.forEach(word => {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    });
    return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));