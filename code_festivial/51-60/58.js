const solution = function () {
  let input = prompt("숫자를 입력하세요");
  let temp = input.split("").reverse();
  let temparr = [];
  for (let i = 0; i < temp.length; i++) {
    temparr.push(temp[i])
    if ((i + 1) % 3 == 0 && i !== temp.length - 1) {
      temparr.push(",")
    }
  }
  let result = temparr.reverse().join("");
  return result;
}
solution();