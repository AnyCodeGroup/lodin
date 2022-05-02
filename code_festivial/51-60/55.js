const route = [];

function hanoi(num, start, end, temp) {
  //원판이 한 개일 때에는 바로 옮기면 됩니다.
  if (num === 1) {
    route.push([start, end]);
    return NaN;
  }

  //원반이 n-1개를 경유기둥으로 옮기고
  hanoi(num - 1, start, temp);
  //가장 큰 원반은 목표기둥으로
  route.push([start, end]);
  //경유기둥과 시작기둥을 바꿉니다.
  hanoi(num - 1, temp, end, start);
}

hanoi(3, 'A', 'B', 'C');
console.log(route);
console.log(route.length);

// 1 : AB 2 1 0
// 2 : AC 1 1 1
// 3 : BC 1 0 2
// 4 : AC 0 1 2
// 5 : CA 1 1 1
// 6 : CB 1 2 0
// 7 : AB 0 3 0

const solution = function (n) {
  // 원판의 개수 = n
  // 원판의 배열 arr
  let arr = []
  for (let i = 0; i < n; i++) {
    arr.push(i + 1)
  }
  console.log(arr)

  const A = arr;
  const B = [];
  const C = [];

  B.push(A.shift())
  C.push(A.shift())

}