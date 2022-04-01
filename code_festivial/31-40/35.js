// 22.04.02 05:00
// Factory 함수 사용하기



function one(n) {
  function two(m) {
    return m ** n
  }
  return two;
}

const a = one(2)
const b = one(3)
const c = one(4)

console.log(a(10))
console.log(b(10))
console.log(c(10))

// 22.04.02 05:07
// 문제를 이해하기가 어려워서 해답의 콘솔을 찍어본 후에 문제풀이...;;