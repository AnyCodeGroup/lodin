let a = Number(prompt("월을 입력하세요"));
let b = Number(prompt("일을 입력하세요"));

let day = new Date(`2020/${a}/${b}`).getDay();
console.log(day);
let check = {
  0: "SUN",
  1: "MON",
  2: "TUE",
  3: "WED",
  4: "THU",
  5: "FRI",
  6: "SAT"
};

console.log(check[day]);