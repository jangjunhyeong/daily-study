const arr = [ "a", "b", "c"];
// 위와 같은 배열이 있다.
// 1. 원소값 중 "a"를 "c" 다음으로 놓는 방법이 있을까?

// arr.push(arr[0]);
// console.log(arr);
// arr.shift();
// console.log(arr);

let temp;
temp = arr[0];
// console.log(temp);
arr.shift();
// console.log(arr);
arr.push(temp);
// console.log(arr);
// 프로그래밍 일반





// 2. 원소값중 "c"를 "a" 앞으로 놓는 방법이 있을까?
const arr2 = ["a","b","c"];
let temp2;
temp2 = arr2[arr2.length-1];
// console.log(temp2);
arr2.pop();
// console.log(arr2);
arr2.unshift(temp2)
// console.log(arr2);

// 3. 혹은 ["b", "a", "c"] 형태로 바꿀 수 있을까?
// splice 말고 다른 거 써보기! - 일단은 써보기 ^^:
const arr3 = ["a","b","c"];
let temp3;
temp3 = arr3[1];
console.log(temp3);
arr3.splice(1,1);
console.log(arr3);
arr3.unshift(temp3);
console.log(arr3);




// Q1 방금 shift로 지웠던 걔 다시 그냥 불러줘!!! 하려면 어떻게 해야할까요?
// const arr4 = ["a","b","c"];
// arr4.shift();
// arr4.unshift();
// console.log(arr4);
// 방법 없음 - 변수 써야됨