/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
*/
const truncateString = (str, num) => {
    if (num > str.length -1) return str;
    return str.split('').slice(0,num).join('') + '...';
}

console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))