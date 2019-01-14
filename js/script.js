var add = function(number1, number2) {
  return number1 + number2;
};
var subtract= function(number1, number2) {
  return number1 - number2;
};
var multiply = function(number1, number2) {
  return number1 * number2;
};
var division = function(number1, number2) {
  return number1 / number2;
};
var bmi = function(weight, height) {
  return weight / (height*height);
};

var fahrenheit = function(celsius) {
  return (celsius * 1.8) + 32;
}

var fahrenheit = function() {
  return (temp - 32) * 5/9;
}

var temp = prompt("Enter Fahrenheit");
var result = fahrenheit(temp);


alert(result);

var number1 = parseInt(prompt("Enter weight: (in kg)"));
var number2 = parseInt(prompt("Enter height: meters"));
var result = bmi(number1, number2);
alert(result);
