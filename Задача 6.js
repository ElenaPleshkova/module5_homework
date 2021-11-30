
let arr=[1,1,1,1,1,2,"Вася"];

for(i=0; i<arr.length; i++){
    if (arr[i]===arr[++i]) continue
    else {console.log('false') 
    break}
}

