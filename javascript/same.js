const usingLoops = (arr1, arr2) => {
    let status = false;
    for (let i=0; i< arr1.length; i++) {
        if (arr2.filter(el => el === arr1[i] ** 2).length === 0) status = true;
    }

    return status;
}


console.log(usingLoops([1,2,3], [1,9]));