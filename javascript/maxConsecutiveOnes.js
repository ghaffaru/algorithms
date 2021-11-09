// Given a binary array nums, return the maximum number of consecutive 1's in the array.

const findMaxConsecutiveOnes = nums => {
    let newArr = [];
    let max = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) {
            max +=1;
            newArr.push(max);
        } else {
            // newArr.push(max);
            max = 0;
        }
    
    }

    let newMax = 0;
    newArr.forEach(el => {
        if (el > newMax) newMax = el;
    })
    return newMax;
}

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]));