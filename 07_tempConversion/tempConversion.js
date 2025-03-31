const convertToCelsius = function(tempFarenheit) {

  const a = 32;
  const b = (5 / 9);

  //celsius = (fahrenheit - 32)(5/9)
  let celsius = roundToOne((tempFarenheit - a) * (b));

  return celsius;
};

const convertToFahrenheit = function(tempCelsius) {

  const c = 32;
  const d = (9 / 5);

  //fahrenheit = (celcius * (9/5) + 32)
  let farenheit = roundToOne((tempCelsius * d) + 32);

  return farenheit;
};

function roundToOne(temp){
  let rounded = Math.round(temp * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
