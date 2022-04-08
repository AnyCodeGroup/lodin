//데이터
let nationWidth = {
  'korea': 220877,
  'Rusia': 17098242,
  'China': 9596961,
  'France': 543965,
  'Japan': 377915,
  'England': 242900,
}

//출력
//England 22023

let keys = Object.keys(nationWidth);
let values = Object.values(nationWidth);
let min = Infinity;
let minIdx = 0;
for (let i = 1; i < values.length; i++) {
  if (Math.abs(values[i] - values[0]) < min) {
    min = Math.abs(values[i] - values[0]);
    minIdx = i;
  }
}
console.log(keys[minIdx], min)