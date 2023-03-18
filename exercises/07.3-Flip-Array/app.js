let arr = [45,67,87,23,5,32,60];

//Your code here
let arr2 = [];
for (let i = 0; i < arr.length; i++) {
    arr2.unshift(arr[i]) ;
}
console.log(arr2)