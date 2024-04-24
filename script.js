// 1. Write a function to calculate the sum of all elements in an array of integers.
// function sum(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];
//     }
//     return sum;
// }
// let arr = [1, 2, 3, 4]
// console.log(sum(arr));


// 2.Writ a function to calculate the average of all elements in an array of integers.
// function average(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum / array.length;
// }
// let array = [1, 2, 3, 4, 5];
// console.log(average(array));


// 3.Write a function to find the maximum element in an array of integers.
// function maximum(a) {
//     let max = a[0];
//     for (let i = 0; i < a.length; i++) {
//         if (a[i] > max) {
//             max = a[i];
//         }
//     }
//     return max;
// }
// let a = [6, 7, 8, 9];
// console.log(maximum(a));


// 4.Write a function to find the minimum element in an array of integers.
// function minimum(X) {
//     let min = X[0];
//     for (let i = 0; i < X.length; i++) {
//         if (X[i] < min) {
//             min = X[i];
//         }
//     }
//         return min;
// }
// let X = [6, 7, 8, 9];
// console.log(minimum(X));


// 5. Write a function to search for a given elements in an array and return its index if found, otherwise return -1.
// function searchArray(A, e) {
//     for (let i = 0; i < A.length; i++) {
//         if (A[i] === e) {
//             return i;
//         }
//     }
//     return -1;
// }
// let A = [10, 20, 30, 40, 50];
// let e = 60;
// let i = searchArray(A, e);
// console.log(i); 



// 6. Write a function to sort an array of integers in non-decreasing order (ascending).
// function sort(num) {
//   for (let i = 0; i < num.length; i++) {
//     for (let j = 0; j < num.length - 1; j++) {
//       if (num[j] > num[j + 1]) {
//         let x = num[j];
//         num[j] = num[j + 1];
//         num[j + 1] = x;
//       }
//     }
// }
//     return num;
// }
// let num = [18, 9, 3, 11];
// console.log(sort(num));


// 7.Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.
// function filterEvenNum(arr) {
//     return arr.filter(n => n % 2 === 0);
// }
// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let evenNum = filterEvenNum(n);
// console.log(evenNum);
  

// --------------Discussion Question---------------------

// arr = [1,3];
// arr2 = [2,4,5,10,11];
// let newArr = arr.concat(arr2);
// console.log(newArr);

// let x = newArr[newArr.length-2];
// console.log(x);
// for (let i = 1; i <= 10; i++){
//     console.log(`${x} x ${i} = ${x} * ${i}`);
// };

// let str = newArr.toString();
// console.log(str);
// console.log(typeof(str));

// --------------------OBJECTS --------------------

// let person = {
//     firstName: "Yogita",
//     lastName: "Gautam",
//     fullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   };
// console.log(person.fullName());
  