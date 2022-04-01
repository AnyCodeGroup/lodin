// 반장 선거

let str = prompt("후보를 입력하세요")
let arr = str.split(" ");
// 후보중 가장 많이나온 이름 출력
// 후보중 가장 많이 나온 이름의 표수 출력

let obj = {}

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]] >= 1) {
    obj[arr[i]]++
  }
  if (obj[arr[i]] == undefined) {
    obj[arr[i]] = 1
  }
}
console.log(obj)
let count = Object.values(obj);
console.log(count)
let max = Math.max(...count);
console.log(max)

// 만약 2명이 동일한 표를 얻으면... 
function isMaxDup(arr) {
  return arr.some(function (x) {
    return arr.indexOf(x) !== arr.lastIndexOf(x)
  })
}
if (isMaxDup(count)) {
  console.log("최대표가 2명 이상입니다.")
  console.log(obj)
} else { // 최대표가 1명일 때 계속 진행

  let maxIndex = "";

  for (let i in obj) {
    if (obj[i] == max) {
      maxIndex = i;
    }
  }
  console.log(maxIndex)
  console.log(`${maxIndex}(이)가 총 ${max}표로 반장이 되었습니다.`)

}