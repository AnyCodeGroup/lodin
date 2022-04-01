const solution = function () {
  let n = prompt("태양계 행성의 이름을 한글로 입력하세요")
  let planetKr = ["수성", "금성", "지구", "화성", "목성", "토성", "천왕성", "해왕성"]
  let planetEn = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
  for (let i = 0; i < planetKr.length; i++) {
    if (n == planetKr[i]) {
      console.log(planetEn[i])
    }
  }

}
solution();