const binary_search = (arr, val) => {
    let leftPointer = 0;
    let rightPointer = arr.length - 1;
    let middlePointer = Math.floor((leftPointer + rightPointer) / 2);
    
    
    while (arr[middlePointer] !== val && leftPointer <= rightPointer) {
        if (val < arr[middlePointer]) {
            rightPointer = middlePointer - 1;
        } else {
            leftPointer = middlePointer + 1;
        }
        middlePointer = Math.floor((leftPointer + rightPointer) / 2)
    }

    if (arr[middlePointer] === val) {
        return middlePointer;
    }
    return -1;
}

console.log(binary_search([2,5,6,9,13,15,28,30], 50));