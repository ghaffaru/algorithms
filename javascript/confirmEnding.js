const confirmEnding = (str,target) => {

    let targetLength = target.length;
    let endingString  = str.split('').slice(str.length - targetLength, str.length, 0).join('');
    if (endingString === target) return  true;
    return false;

}

console.log(confirmEnding("Connor", "n"));
console.log(confirmEnding("Congratulation", "on"));