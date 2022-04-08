function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0]; // 4 // 10
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  // 1 : right 10 // 1 : left 5
  // 2 : right 10 5 // 2 : left 5 8
  // 3 : right 10 5 8 // 3 : left 5 8 right 11
  // 4 : right 10 5 8 11 // 4 : left 5 8 6 right 11
  // 5 : right 10 5 8 11 6
  return quickSort(left), quickSort(right)
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));
// 예제 4 10 5 8 11 6
// array = [4, 10, 5, 8, 11, 6]
console.log(quickSort(array));
