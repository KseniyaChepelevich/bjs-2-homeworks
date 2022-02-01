'use strict'

function solveEquation(a, b, c) {
  let arr = [];
  let x = 0;
  let x1 = 0;
  let x2 = 0;

  let D = b ** 2 - 4 * a * c;
  
  if (D < 0) {
  } else if (D === 0) {
      x = (-b) / (2 * a)
      arr.push(x);
    } else {
        x1 = (-b + Math.sqrt(D)) / (2 * a);
        arr.push(x1);
        x2 = (-b - Math.sqrt(D)) / ( 2 * a);
        arr.push(x2);
      } 
  return arr; // array
}


function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  
  // код для задачи №2 писать здесь

  return totalAmount;
}

