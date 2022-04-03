var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
let potion = {};
let discount = [];
var a = parseInt(input[0]);
var b = input[1].split(" ").map(Number);
let Maxdis = {};
for (let i = 0; i < a; i++) {
  potion[i + 1] = b[i];
  discount[i + 1] = 0;
}

for (let i = 0; i < input[2]; i++) {
  let c = input[3 + i].split(" ");
  potion[c[0]] -= c[1];
  discount[c[0]] += c[1];
  if (potion[c[0]] <= 0) {
    potion[c[0]] = 1;
  }
};
let pi = input[2] + 3;
while (input[pi] == 0) {
  pi++;
}
while (input[pi] !== null) {
  for (let i = 0; i < input[pi]; i++) {
    let d = input[pi + i].split(" ");
    potion[d[0]] -= c[1];
    discount[d[0]] += d[1];
    if (potion[d[0]] <= 0) {
      potion[d[0]] = 1;

    }
  }
  pi = pi + input[pi];
  while (input[pi] == 0) {
    pi++
  }
}
Maxdis = Object.values(discount); // [10, 20, 10, 10]
Mindis = [] // 0 -5 10 15
disAbs = [] // 0 5 10 15
for (let i = 0; i < a; i++) {
  disAbs.push(Math.abs(potion[i + 1] - Maxdis[i]))
  Mindis.push(potion[i + 1] = Maxdis[i])
}
for (let i = 0; i < a; i++) {
  if (mindis[i] <= 0) {
    Mindis[i] = 1
  }
} // Mindis = [1 1 10 15]
let result = 0;
result += potion[IndexOf(Math.min(...disAbs)) + 1];
Mindis.splice(IndexOf(Math.min(...disAbs)), 1);
for (let i = 0; i < Mindis.length; i++) {
  result += Mindis[i];
}

console.log(result);
