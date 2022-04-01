let a = prompt("성적을 입력하세요").split(" ").map(Number);

let count = 0;
a.sort((a, b) => b - a)
console.log(a)

let st1 = 0;
let st2 = 0;
let st3 = 0;
for (let i = 0; i < a.length; i++) {
  st1 = a[0];
  if (a[i] == st1 || a[i] == st2 || a[i] == st3) {
    count++
  } else if (a[i] < st1 && st2 == 0) {
    st2 = a[i]
    count++
  } else if (a[i] < st2 && st3 == 0) {
    st3 = a[i]
    count++
  }
  console.log(st1, st2, st3, i, a[i], count)
}
console.log(count);