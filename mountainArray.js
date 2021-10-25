const mountainArray = arr => {
   
    let increase = false;
    let decrease = false;
    
    if (arr.length <3) return false;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            return false;
        }
        if (arr[i] > arr[i - 1]) {
            // cannot have a increase after decrease
            if (decrease === true) {
                return false
            }
            increase = true;
        }
        if (arr[i] < arr[i - 1]) {
            decrease = true;
        }
    }

    if (increase && decrease) {
        return true;
    } else {
        return false;
    }
}

console.log(mountainArray([2]));