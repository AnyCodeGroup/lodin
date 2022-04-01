let a = Number(prompt("제한 무게"));
let b = Number(prompt("함께한 친구들의 수"));
let c = prompt("친구들의 몸무게를 뛰어쓰기로 구분하여 입력").split(" ").sort((a, b) => a - b).map(Number)

let sum = 0
let count = 0;
for (let i = 0; i < b; i++) {
  sum += c[i]
  if (sum <= a) {
    count++
  }
  console.log(i, count, sum)
}
console.log(count)