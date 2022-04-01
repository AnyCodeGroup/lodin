// 22.04.02 04:06 // 22.04.02 04:59

// sort 구현

let a = prompt("키를 공백으로 구분하여 입력하시오")
let b = a.split(" ").map(Number).sort((a,b) => a-b).join(" "); 

if(a === b){
  console.log("YES")
} else {
  console.log("NO")
}

 // sort() 메소드는 원본을 변형시킨다. 때문에. sort()를 쓰면 원본배열이 바뀌어 비교가 어렵다...?

// 둘다 배열이므로 길이만 같으면 yes로 나옴.

// for(let i=0; i<a.length; i++){
//   if(a[i] !== a.sort((a,b) => a-b)[i]){
//     console.log("NO")
    
//   } else {
//     console.log("YES")
//   }
// }
// ???

// let test1 = test.sort((a,b) => a-b);
// let check = []
// for(let i=0; i<test.length; i++){
//   if(test[i] !== test1[i]){

//     check.push("1")
//   } 
// }

// if(check.length >= 1) {
//   console.log("NO")
// } else { console.log("YES")}

// 뭔가 이상한데.... 