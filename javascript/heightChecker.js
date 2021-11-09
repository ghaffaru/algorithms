const heightChecker = heights => {
    let notMatch = 0;

    let expected = [...heights];

    expected.sort((a,b) => a-b);

    for (let i = 0;i < heights.length;i++){
        if(expected[i] !== heights[i]) notMatch++;
    }
    return notMatch;
}

console.log(heightChecker([1,1,4,2,1,3]))