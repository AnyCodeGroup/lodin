let a = prompt("타자 입력").split("");

for (let i = 0; i < a.length; i++) {
  if (a[i] == "q") {
    a[i] = "e"
  }
}
console.log(a.join(""))