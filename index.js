// Your code here
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

let mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

function wrapAdjective(str = "*") {
  return function (adj = "special") {
    return `You are ${str}${adj}${str}!`;
  };
}

const Calculator = {};

Calculator.add = function (a, b) {
  return a + b;
};
Calculator.subtract = function (a, b) {
  return a - b;
};
Calculator.multiply = function (a, b) {
  return a * b;
};
Calculator.divide = function (a, b) {
  return a / b;
};

let actionApplyer = function (int, array) {
  for (let i = 0; i < array.length; i++) {
    int = array[i](int);
  }

  return int;
};
