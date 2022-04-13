let a = prompt("문자열을 입력하세요.").split("");
let temp = [];
let count = 0;
console.log(a)
for (let i = 0; i < a.length; i++) {
  count++
  if (a[i - 1] !== a[i] && a[i] !== a[i + 1]) {
    temp.push(a[i])
  }
  if (a[i] !== a[i + 1]) {
    temp.push(count)
    count = 0;
  } else if (temp[temp.length - 1] !== a[i]) {
    temp.push(a[i])
  }
  console.log(temp)
}
let result = temp.join("")
console.log(result);