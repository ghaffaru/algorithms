var checkIfExist = function(arr) {
    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i];
        for (let j = 0; j < arr.length; j++) {
            const possibleValue = arr[j];
            if (possibleValue === 2 * currentValue && i !== j) return true;
        }
    }
    return false;
};

console.log(checkIfExist([-16,8,2]));