/*
Given an integer array nums, move all the even integers at the beginning of the array followed by all the odd integers
*/
const sortArrayByParity = nums => {

    let numsLength = nums.length;

    // push evens
    for (let i = 0; i < numsLength; i++) {
        if (nums[i] % 2 === 0) {
            nums.push(nums[i]);
        }
    }

    // push odds
    for (let i = 0; i < numsLength; i++) {
        if (nums[i] % 2 === 1) {
            nums.push(nums[i]);
        }
    }

    // splice initial
    nums.splice(0,numsLength);
    return nums;
}

console.log(sortArrayByParity([3,1,2,4]));