const countUniquevalues = arr => {
    let myObj = {}

    for (let  i = 0; i < arr.length; i++) {
        if (myObj[arr[i]]) {
            myObj[arr[i]]++;
        } else {
            myObj[arr[i]] = 1;
        }
    }
    console.log(myObj)
    return Object.keys(myObj).length;
}

const anotherApproach = arr => {
    let unique = [];
    for (let i = 0; i < arr.length; i++) {
        if (!unique.find(el => el === arr[i])) unique.push(arr[i])
    }
    return unique.length;
}
console.log(anotherApproach([1,2,3,4,4,4,7,7,12,12,13]));