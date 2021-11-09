const titleCase = str => {
    let strArr = str.split(' ').map(el => {
        return el[0].toUpperCase() + 
                el.slice(1,el.length).split('').map(letter => letter.toLowerCase()).join('')
      });
      return strArr.join(' ');
}
  
console.log(titleCase("I'm a little tea pot"));