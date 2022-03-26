
// 1. 배열의 삭제
// 다음 배열에서 400, 500을 삭제하는 code를 입력하시오
var nums = [100, 200, 300, 400, 500];


// Answer
function solution1() {
  nums.length = 3;
  return nums
}
//1.


//2.
function solution2() {
  nums.pop()
  nums.pop()
  return nums
}
// 3.

function solution3() {
  return nums.splice(0, 3)
}

console.log(solution1())
console.log(solution2())
console.log(solution3())