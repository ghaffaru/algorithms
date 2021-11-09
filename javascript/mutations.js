/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array
*/
const mutation  = arr => {
    let first = arr[0].split('');
    let second = arr[1].split('');
  
    let secondElementsExist = [];
    second.forEach(el => {
      if (first.find(letter => letter.toLowerCase() === el.toLowerCase())) secondElementsExist.push(el);
    });
    if (secondElementsExist.length === second.length) return true;
    return false;
  }
  
  console.log(mutation(["Mary", "Army"]));