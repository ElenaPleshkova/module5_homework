let arr = [1,3,5,2,6,8,10,20,null,"Вася"];

let sumEven=0;
let sumOdd=0;

for(i=0; i<arr.length; i++){
  
 if (typeof arr[i]=='number'){
    if(arr[i]%2==0) {sumEven++}
   else{sumOdd++}
  }
  else if(arr[i]===null){console.log('Здесь нулевой элемент')}
  else continue
}

console.log(sumEven);
console.log(sumOdd);