'use strict'

function upperFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

let str = "урок-3-был слишком легким";
str = upperFirstLetter(str);
str = str.replace(/-/g, ' ');
console.log(str);


let ind = str.lastIndexOf(" ");
var word = str.substring(ind + 1);
str = str.slice(0, ind);
console.log("Вывожу слово");
console.log(word);

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  }
  
  word = word.replaceAt(word.length - 1, "о");
  word = word.replaceAt(word.length - 2, "о");
  console.log(word);

  let arr = [20, 33, 1, "Человек", 2, 3];
  let result = 0;

  for (let i = 0; i < arr.length; ++i){
      if (!isNaN(arr[i])){
          result += Math.pow(arr[i],3);
      }
  }
  console.log(Math.sqrt(result));


  function parseStr(str){
      if (!(typeof(str) === 'string')){
          alert("аргумент не строка!");
          return;
      }
      str = str.trim();
      if (str.length > 50){
          str = str.slice(0, 50);
          let tmp = "...";
          str += tmp;
      }
      console.log(str);
      return str;
      
}
parseStr("qweasdzxcvqweasdzxcvqweasdzxcvqweasdzxcvqweasdzxcvqweasdzxcvqweasdzxcvqweasdzxcv");