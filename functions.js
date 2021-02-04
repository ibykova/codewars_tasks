//Task 1 Higher-Order Functions Series - Find the average age
//link (https://www.codewars.com/kata/582ba36cc1901399a70005fc/train/javascript)

function getAverageAge(list) {
  function calcSum(sum, user) {
    return sum + user.age;
  }
  
  let sum = list.reduce(calcSum, 0);
  
  return Math.ceil(sum / list.length);
}
