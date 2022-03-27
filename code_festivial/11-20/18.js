// 19:04
let check = prompt("값을 입력하세요.")
const solution = function (n) {
  let test = `${n}`
  let result = test.split(" ")
  let sum = 0;
  let average = 0;
  for (let i = 0; i < result.length; i++) {
    sum += Number(result[i]);
  }
  average = sum / result.length;
  return Math.floor(average);
}
solution(check)
// 19:46 stop
// reduce를 이용하면 편하긴 할건데. 그냥 일일이 구현하는 방법은 없을까...?


// let a = "20 30 40"
// console.log(a)
// let result = a.split(" ");
// console.log(result);
// let sum =0;
// let average = 0;
// for (let i = 0; i < result.length; i++) {
//   sum += Number(result[i]);
// }
// console.log(sum);
// average = sum / result.length;
// console.log(average)

// 22:54