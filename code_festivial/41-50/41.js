let a = Number(prompt("숫자를 입력하세요"))
console.log("입력값 : ", a)
let b = 0;
for (let i = 2; i < a; i++) {
  if (a % i == 0) {
    b++
  }
}
if (b == 0) {
  console.log("YES")
} else {
  console.log("NO")
}