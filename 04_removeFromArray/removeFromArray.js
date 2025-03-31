const removeFromArray = function(array, ...values) {
  
  //get length of value array
  let valuesLength = values.length;
    //remove items defined in the values array from array 

  for (let i = 0; i < valuesLength; i++){
    const index = array.indexOf(values[i]);
    array.splice(index, 1);
   }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
