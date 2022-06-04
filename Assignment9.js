//declaring an array
console.log("array before sorting");
var arr=[44,86,24,923,256];
//sorting array by using sort method
arr.sort(function(a,b){return a-b});
//printing the sorted array
console.log("array after sorting")
console.log(arr);