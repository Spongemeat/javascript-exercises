const repeatString = function(string, num) {
  let phrase = '';
  
  if (num < 0){
    return 'ERROR';
  }
  else {
    for (let i = 0; i < num; i++){
     phrase = phrase + string;
    }
  }
  return phrase;

};

// Do not edit below this line
module.exports = repeatString;
