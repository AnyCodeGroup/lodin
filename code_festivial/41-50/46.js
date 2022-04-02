let sum = ""
for (let i = 1; i <= 20; i++) {
  sum += i
}
let result = sum.split("").map(Number)
sum = 0;
result.forEach(v => sum += v);
console.log(sum)