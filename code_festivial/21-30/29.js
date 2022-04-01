const solution = function () {
  const a = prompt("알파벳 하나만 입력하세요")
  if (a == a.toUpperCase()) {
    return console.log("YES")
  } else if (a == a.toLowerCase()) {
    return console.log("NO")
  }
}