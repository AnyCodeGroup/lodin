const solution = function (a, b) {
  let keyArr = a.split(" ");
  let valueArr = b.split(" ");
  let result = {}
  for (let i = 0; i < a.length; i++) {
    result.keyArr[i] = valueArr[i];
  }
  console.log(result)
}