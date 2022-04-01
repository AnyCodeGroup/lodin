// 205원 우표 30장, 82원 우표 40장, 30원 우표 50장이 있습니다.

// 이들 우표의 전부 또는 일부(1장 이상)를 사용하여 앞면의 합으로 나타낼 수 있는 금액의 경우의 수는 얼마인지 구하시오


const s = function () {
  const x = 205
  const y = 82
  const z = 30
  result = []
  for (let i = 0; i <= 30; i++) {
    for (let j = 0; j <= 40; j++) {
      for (let k = 0; k <= 50; k++) {
        result.push(x * i + y * j + z * k)
      }
    }
  }
  return [...new Set(result)].length - 1;
}
console.log(s())