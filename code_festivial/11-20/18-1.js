let a = prompt("시험점수를 입력하세요").split(" ").map(Number);
console.log(a)
let average = a.reduce((acc, cur, i, { length }) => {
  return i === length - 1 ? (acc + cur) / length : acc + cur;
}, 0);
average = Math.floor(average)
console.log(average);

// map(Number)를 써주지 않으면 입력값이 string으로 들어가서 제대로 값이 출력되지 않음.