/*
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1)
*/

const getIndexToIns = (arr, num) => {
    let sortedArray = arr.sort((a,b) => a - b);

    let index = 0;
    for (let i = 0; i < sortedArray.length; i++) {
        if (num > sortedArray[i]) index = i + 1;
    }
    
    return index;
}

console.log(getIndexToIns([5,3,20,3], 5));