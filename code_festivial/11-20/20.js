const n = prompt("수를 2개 입력하세요").split(" ")
const solution = function (a, b) {
  return parseInt(a / b) + " " + a % b
}

console.log(solution(n[0], n[1]))