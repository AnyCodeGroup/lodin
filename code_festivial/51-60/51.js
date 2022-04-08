// 병합 정렬
// 예제 : 4 10 5 8 9 11
// array : [4, 10, 5, 8, 9, 11]
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2); // 기준점 잡기(가운데, 반으로 나눠서 내림)
  // array.mid = 3
  // array.mergeSort(left).mid = 2
  // array.mergeSort(right).mid = 1
  // array.mergeSort(left).mergeSort(left).mid = 1
  const left = arr.slice(0, mid);
  // array.left = [4,10,5,8]
  // array.mergeSort(left).left =[4, 10, 5]
  // array.mergeSort(left).mergeSort(left).left = [4, 10]
  const right = arr.slice(mid);
  // array.right = [9,11]
  // array.mergeSort(right)
  // array.mergeSort(left).left = [8]
  // array.mergeSort(left).mergeSort(left).right = [5]

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];

  while (left.length && right.length) { // left의 길이가 존재하고, right의 길이가 존재할때
    if (left[0] < right[0]) { // left 첫번째 배열의 값과 right 첫번째 배열의 값을 비교
      result.push(left.shift()); // left 첫번째 값 삭제 후 result에 넣는다.
    } else {
      result.push(right.shift()); // right 첫번째 값 삭제후 result에 넣는다.
    }
  }
  // 1 : result 4  left 10 5 8 right 9 11
  // 2 : result 4 9 left 10 5 8 right 11
  // 3 : result 4 9 10 left 5 8 right 11
  // 4 : result 4 9 10 5 left 8 right 11
  // 5 : result 4 9 10 5 8 left null right 11
  while (left.length) {
    result.push(left.shift())
  }
  // left.length = 0 이므로 지나감.
  while (right.length) {
    result.push(right.shift());
  }
  // right.length= 1이므로 실행.
  // 6 : result 4 9 10 5 8 11
  //이라고 생각했는데... mergeSort(무한 반복.)
  return result;
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10)); // [4, 10, 5, 8, 9, 11]


console.log(mergeSort(array));

// 개멍청... slice 잘못계산해서 예제 잘못나눔.. ㅋㅋㅋㅋㅋㅋㅋ 2번째 인자 전까지의 값까지 복사함.