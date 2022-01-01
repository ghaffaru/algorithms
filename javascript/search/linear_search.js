const linearSearch = (arr, val) => {
    // returns index if found else -1

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) return i;
    }
    return -1;
}

console.log(linearSearch([3,5,2,6], 10));