const solution = function (n) {
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(i + 1)
  }
  let check = arr.join("").split("").map(Number)
  let count = 0;
  for (let i = 0; i < check.length; i++) {
    if (check[i] == 1) {
      count++;
    }
  }
  return count;
}
solution(1000); // 301
