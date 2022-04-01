
 const a =  prompt("알파벳 하나만 입력하세요")
 if ((/A-Z/).test(a)){
    console.log("YES")
 } else if (/a-z/.test(a)){
   console.log("NO")
 }