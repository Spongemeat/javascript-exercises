const leapYears = function(year) {

  //years divisible by 4 are leap years
  if ((year % 4) === 0){
    if ((year % 100) === 0 && (year % 400) !== 0){
      return false;
    } 
    return true;
  }  
  return false;
  //years divisible by 100 are not leap years, unless they are divisible by 400

};

// Do not edit below this line
module.exports = leapYears;
