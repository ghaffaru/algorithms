/*
Given an array arr, replace every element in that array with the greatest element
 among the elements to its right,
 and replace the last element with -1
*/

const replaceElements = arr => {
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) max = -1;
        else max = arr[i+1];

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > max) max = arr[j];
        }
        arr[i] = max;
    }
    return arr;
}

console.log(replaceElements([400]));