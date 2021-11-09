// Given an array nums of integers, return how many of them contain an even number of digits

const findNumbers = nums => {
    let numOfEvens = 0;

    nums.forEach(num => {
        if ((num + '').length % 2 === 0) numOfEvens++;
    })

    return numOfEvens;
}

console.log(findNumbers([12,245,2,6,7896]));