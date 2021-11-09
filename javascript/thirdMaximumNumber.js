/*
Given an integer array nums, return the third distinct maximum number in this array. If the third maximum does not exist, return the maximum numbe
*/

const thirdMax = nums => {
    
    // filter duplicates
    let arrLength = nums.length;
    let newArr = [];
    for (let i = 0; i < arrLength; i++) {
        if (!newArr.find(el => el === nums[i])) newArr.push(nums[i]);
    }
    newArr.sort((a,b)=> a-b);
    
    if (newArr.length >= 3) {
        return newArr.slice(newArr.length - 3,newArr.length - 2)[0];
    } else if (newArr.length == 2) {
        return newArr[1];
    } else {
        return newArr[0];
    }
}

console.log(thirdMax([3,2,1]))