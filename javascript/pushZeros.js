var moveZeroes = function(nums) {
    let numsLength = nums.length
    let zeroIndices = [];
    let zeroCounts = 0;
    for (let i = 0; i < numsLength; i++) {
        if (nums[i] === 0) {

            zeroCounts++;
            
        } else {
            // push the elements back
            nums.push(nums[i]);
        }
    }
    nums.splice(0,numsLength);
while (zeroCounts > 0) {
    nums.push(0);
    zeroCounts--;
}

    return nums;
};

console.log(moveZeroes([0,0]))