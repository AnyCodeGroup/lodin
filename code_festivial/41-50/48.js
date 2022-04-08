const solution = function () {
  let str = prompt("영어 문자열을 입력하세요.").split("")
  for (let i = 0; i < str.length; i++) {
    console.log(str[i]);
    if (str[i] !== str[i].toLowerCase()) {
      str[i] = str[i].toLowerCase();
    } else {
      str[i] = str[i].toUpperCase();
    }
  }
  return str.join("")
}
solution();