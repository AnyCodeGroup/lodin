const solution = function () {
  let a = prompt("단어를 입력하세요").split("");
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    if (i !== a.length - 1) {
      arr.push(a[i] + a[i + 1])
    }
  }
}
