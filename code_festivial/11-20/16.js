// 18:43

const text = prompt("거꾸로 입력하고 싶은 걸 말해봐...")
const solution = function (str) {
  str.split("")
  let answer = [];
  let arr = str.split("")
  for (let i = 0; i < arr.length; i++) {
    answer.push(arr[arr.length - 1 - i])
  }
  return answer.join("");
}


console.log(solution(text));

//18:56
// 22:09 아 split 써서 배열만든 다음에 그냥 reverse 하면 되네..;;
const text1 = prompt("거꾸로")
const solution2 = function (str) {
  let arr = str.split("")
  return arr.reverse().join("");

}
console.log(solution2(text1))