const reverseString  = string => {
    return string.split('').reverse().join('');
}

const reverseStringWithLoop = string => {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        newString += string[i];
    }
    return newString;
}
console.log(reverseString("hello"));
console.log(reverseStringWithLoop("hello"));