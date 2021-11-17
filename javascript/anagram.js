const anagram = (str1, str2) => {
   
    if (str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter = {}

    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        frequencyCounter[letter] ? frequencyCounter[letter]++: frequencyCounter[letter] = 1;
    }

    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];

        if (!frequencyCounter[letter]) return false;
        else frequencyCounter[letter]--;
    }
    return true;
}

console.log(anagram('anagram', 'nagaram'));