//Task 1 Higher-Order Functions Series - Find the average age
//link (https://www.codewars.com/kata/582ba36cc1901399a70005fc/train/javascript)

function getAverageAge(list) {
  function calcSum(sum, user) {
    return sum + user.age;
  }
  
  let sum = list.reduce(calcSum, 0);
  let res = sum / list.length;
  
  return Number(res.toFixed(0));
}

//Task 2 Decsending order (reversed number)
//link: https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript

function descendingOrder(n){
    return parseInt(n.toString().split('').sort().reverse().join(''), 10);
  }
console.log(descendingOrder(n));

