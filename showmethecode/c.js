var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().split(' ');
var a = parseInt(input[0]); // 8
var b = parseInt(input[1]);// WAHEWHEE
console.log(a + b);

let a = input[1].split("")
for (let i = 0; i < a.length; i++) {
  if ((a[i] !== "W") || (a[i] !== "H") || (a[i] !== "E")) {
    a[i] = " "
  }
}
a.join("");
// a = W_HEWHEE

// W _H (2) (3)
// 1

