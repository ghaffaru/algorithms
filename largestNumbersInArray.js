// Algorithm
/*
- Initialize empty array
- loop to get each sub array
- find the largest in each subarray
- push to the new array
*/
const largestInEachSubArray = arr => {
    let newArr = [];

    arr.forEach(oneArr=> {
        let high=oneArr[0];
        oneArr.forEach(el=>{
            if(el>high) high = el;
        });
        newArr.push(high);
    });
    return newArr;
    
}

console.log(largestInEachSubArray([[13,27,1,26], [4,5,1,3], [32,35,37,39], [-72, -3,-17, -10]]))