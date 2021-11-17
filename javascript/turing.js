const countElements = arr => {
    var result = null;

    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];

        if (arr.filter(el => el === currentNumber + 1).length > 0){
            count++;
        }

    }

    return count;
}

console.log(countElements([1,1,2,2]));