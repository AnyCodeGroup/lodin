// 7kg x, 3kg y

// 7x+3y = N
// (x+y)의 최소값.
// if (7x+3y !== N) return -1
const solution = function () {
  const N = Number(prompt("정량을 입력하세요"));
  const a = Number(prompt("화물A의 무게를 입력하세요"));
  const b = Number(prompt("화물B의 무게를 입력하세요"));
  let big = 0;
  let s = 0;
  const error = -1;
  let sum = 0;
  (a > b) ? (big = a, s = b) : (big = b, s = a); // a와 b화물의 크기를 비교하여 큰값을 저장
  const max1 = Math.ceil(N / big) // 정량을 큰 화물로 나누었을때 몫
  console.log(N, a, b)
  const max2 = Math.ceil(N / s) // 정량을 작은 화물로 나누엇을 때 몫
  for (let i = 0; i < max2; i++) {
    for (let j = 0; j < max1; j++) {
      console.log(`화물 A=${j}, 화물 B=${i}, sum = ${a * j + b * i}`)
      if (a * j + b * i == N) {
        sum = i + j;
        return console.log(sum)
      }

    }
  }
  return console.log(error)
}
solution();
