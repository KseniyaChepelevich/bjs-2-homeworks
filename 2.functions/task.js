'use strict'

// Задание 1
function getArrayParams(arr) {
  let min, max, sum, avg;
  min = Infinity;
  max = -Infinity;
  sum = 0;
  avg = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }
  avg = parseFloat((sum / arr.length).toFixed(2)); 
  return { min: min, max: max, avg: avg };
}


// Задание 2

function worker(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
  sum += arr[i];  
  }
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = -Infinity;
  let sumArr = 0;
  for (let i = 0; i < arrOfArr.length; i++) {
    sumArr = func(arrOfArr[i]);
    if (sumArr > max) {
      max = sumArr
    }  
  }  
  return max;  
}


// Задание 3
function worker2(arr) {
  let arrParams = getArrayParams(arr);

  return arrParams.max - arrParams.min;
}
