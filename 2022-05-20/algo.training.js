const arr = [ "a", "b", "c"];


// 1. 원소값 중 "a"를 "c" 다음으로 놓는 방법이 있을까?
arr.shift();
arr.push("a");
console.log(arr);
// 2. 원소값중 "c"를 "a" 앞으로 놓는 방법이 있을까?
const arr2 = ["a","b","c"];
arr2.pop();
arr2.unshift("c");
console.log(arr2);
// 3. 혹은 ["b", "a", "c"] 형태로 바꿀 수 있을까?
const arr3 = ["a","b","c"];
arr3.splice(1,1,"a");
arr3.shift();
arr3.unshift("b");
console.log(arr3);





// Q1 방금 shift로 지웠던 걔 다시 그냥 불러줘!!! 하려면 어떻게 해야할까요?
// const arr4 = ["a","b","c"];
// arr4.shift();
// arr4.unshift();
// console.log(arr4);
