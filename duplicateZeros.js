
const duplicateZeros = arr => {
    let arrayLength = arr.length;
    for (let i = 0; i < arrayLength; i++) {
        if (arr[i] === 0) {
            arr.splice(i+1,0,0);
            i++;
        }
       
    }

     arr.splice(arrayLength);
     return arr;
}

console.log(duplicateZeros([1,0,2,3,0,4,5,0]));