const solution = function () {
  let a = prompt("숫자열을 공백으로 구분하여 입력하시오")
  let b = a.split(" ").map(Number)
  return Math.max(...b)
}
solution();

// 답안에서는 sort이용해서 정렬한다음 첫번재 배열 반환.