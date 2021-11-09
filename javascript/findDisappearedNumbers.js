var findDisappearedNumbers = function(nums) {
    const numsLength = nums.length;
    let disappearedNums = [];
    for (let i = 1; i <= numsLength; i++) {
        if (!nums.find(el => el === i)) disappearedNums.push(i)
    }
    return disappearedNums;
};

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));