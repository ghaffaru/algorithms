const factorialize = num => {
    let result = 1;
    if (num == 0) {
        return 1;
    } else if (num < 0) {
        throw new Error('Number must not be negative');
    }else {
        for(let i=num; i>=1; i--) {
            result *= i;
        }
    }
    return result;
}

const factorializeWithRecursion = num => {
    if (num == 0) {
        return 1;
    } else if (num < 0) {
        throw new Error('Number must not be negative');
    } else {
        return num * factorializeWithRecursion(num - 1)
    }
}
console.log(factorializeWithRecursion(10));