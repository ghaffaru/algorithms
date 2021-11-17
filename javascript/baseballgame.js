const calPoints = ops => {
    let arr = [];

    for (let i = 0; i < ops.length; i++) {
        if (ops[i] === "+") {
            arr.push(arr[arr.length - 2] +arr[arr.length - 1]);
        } else if (ops[i]=== "D") {
            arr.push(2 * arr[arr.length - 1]);
        } else if (ops[i] === "C") {
            arr.splice(i - 1, 1);
        } else {
            arr.push(parseInt(ops[i]));
        }
    }

    let result = 0;
    arr.forEach(el => result += el);
    return result;
}

console.log(calPoints(["5","-2","4","C","D", "9","+", "+"]));