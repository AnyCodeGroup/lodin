const a = [1, 2, 3, 4];
const b = ['a', 'b', 'c', 'd'];
let result = [];
for (let i = 0; i < a.length; i++) {
  if (i % 2 == 0) {
    result.push([a[i], b[i]])
  } else {
    result.push([b[i], a[i]])
  }
}
console.log(result)