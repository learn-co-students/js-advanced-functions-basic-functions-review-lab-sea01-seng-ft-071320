function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

function mondayWork(activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
}

function wrapAdjective(deco = "*") {
  return function (adj = "special") {
    return `You are ${deco}${adj}${deco}!`;
  };
}

//Calculator labs
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

// actionApplyer function labs
function actionApplyer(int, funcList) {
  for (const func of funcList) {
    int = func(int);
  }

  return int;
}
