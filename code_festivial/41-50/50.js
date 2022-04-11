function bubble(arr) {
  let result = arr.slice();

  for (let i = 0; i < result.length - 1; i++) {
    for (let j = i; j < result.length - 1; j++) {
      if (result[j] > result[j + 1]) {
        let temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }
  return result;
}

const items = prompt("입력해주세요").split(' ').map((n) => { return parseInt(n, 10) })

console.log(bubble(items));

// 답안 안보고 작성했는데... 왜 답이랑 변수까지 찰떡같이 똑같냐..;;;