const solution = function () {
  let a = prompt("이름을 입력하세요")
  const regExp = /[A-Za-z]/i
  if (regExp.test(a) == false) {
    alert("only use English");
  } else {
    console.log(a.toUpperCase());
  }
}
solution()