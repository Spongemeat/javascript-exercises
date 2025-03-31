const reverseString = function(word) {

const string = [word.length];

for (let i = 0; i < word.length; i++){
  string [i] = word.charAt(i);
};

const newStringArray = string.reverse(string);

let newString = '';

for (let i = 0; i < word.length; i++){
  newString = newString.concat(string[i]);
}

return newString;

}

// Do not edit below this line
module.exports = reverseString;
