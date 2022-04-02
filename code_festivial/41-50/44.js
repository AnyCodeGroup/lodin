let a = prompt("양의 정수를 입력하세요").split("").map(Number);
sum = 0
for (let i = 0; i < a.length; i++) {
  sum += a[i]
}
console.log(sum)