const solution = function () {
  let a = prompt("이름");
  console.log(a);
  let b = prompt("점수");
  console.log(b);
  let keyArr = a.split(" ");
  console.log(keyArr);
  let valueArr = b.split(" ");
  console.log(valueArr);
  let result = {};
  for (let i = 0; i < a.length; i++) {
    result[keyArr[i]] = valueArr[i];
  }
  console.log(result)
}

// undefined가 왜나오지
// aaa bbb , 70 100 입력시
// {aaa: '70', bbb: '100', undefined: undefined}
