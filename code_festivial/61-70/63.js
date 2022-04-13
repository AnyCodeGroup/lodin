let a = prompt("문자열을 입력하세요").split(" ");
let result = "";
for (let i = 0; i < a.length; i++) {
  result += a[i].charAt(0)
}
console.log(result)