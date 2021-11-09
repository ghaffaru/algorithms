const convertToF = celsius => {
    let fahrenheit = 9/5 * celsius + 32;
    return fahrenheit;
}

console.log(convertToF(30));