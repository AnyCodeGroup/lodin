function solution(n) {
  for (let i = 0; i < n; i++) {
    for (let j = n - 1; j > i; j--) {
      document.write("&nbsp");
    }
    for (let j = 0; j <= i; j++) {
      document.write("*")
    }
    for (let j = 1; j <= i; j++) {
      document.write("*")
    }
    document.write("<br>")
  }
}