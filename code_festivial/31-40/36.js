// 05: 09
// 구구단 출력 
// 1~9 숫자중 하나 입력시 그 단의 구구단 결과를 한줄에 출력

let num = prompt("숫자를 입력하시오");
let result = ""
for (let i = 1; i < 10; i++) {
  result += num * i + " "
}