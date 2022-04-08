let a = prompt("숫자를 입력하세요").split(" ").map(Number);
a.sort((a, b) => a - b);
let result = 0
for (let i = 0; i < a.length - 1; i++) {
  if (a[i] !== (a[i + 1] - 1)) {
    result++
  }
}
if (result > 0) {
  console.log("NO")
} else {
  console.log("YES")
}