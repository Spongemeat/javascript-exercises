const sumAll = function(a, b) {

  if (a < 0 || b < 0 || Number.isInteger(a) !== true || Number.isInteger(b) !== true){
    return 'ERROR';
  }

  const sequence = [a,b].sort();

  //calculate the difference between the numbers for range
  let range = (sequence[1] - sequence[0]);

  //add each number from lowest value to highest to array
  for (let i = sequence[0]; i < range; i++){
    sequence.push(i + 1);
  }

  //calculate the sum of each item
  let sum = 0;
  for (j = 0; j < sequence.length; j++){
    sum += sequence[j];
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
