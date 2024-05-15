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
// 1.
// let person = {
//     firstName: "Yogita",
//     lastName: "Gautam",
//     fullName: function() {
//       return `${this.firstName} ${this.lastName}`;
//     }
//   };
// console.log(person.fullName());
  
// 2.
// const counter = {
//     value: 0,
//     increment: function() {
//         this.value++;
//     },
//     decrement: function() {
//         this.value--;
//     }
// };
// console.log(counter.value); 
// counter.increment();
// console.log(counter.value); 
// counter.decrement();
// console.log(counter.value); 

// 3.
// let employees = {
//     "John": 50000,
//     "Alice": 60000,
//     "Bob": 55000,
//     "Emma": 62000,
//     "Mike": 53000
// };
// function increaseSalaries(employees, increaseAmount) {
//     for (let employee in employees) {
//       employees[employee] += increaseAmount;
//     }
// }
// increaseSalaries(employees, 1000);
// console.log("Updated salaries:");
// console.log(employees);

// 4.
// let person = {
//   name: "Yogita",
//   age: 20,
//   city: "Bangaluru"
// };
// console.log(person.name); 
// console.log(person["age"]);

// 5.
// let person = {
//   _name: "Yogita",
//   get name() {
//       return this._name;
//   },
//   set name(newName) {
//       this._name = newName;
//   }
// };
// console.log(person.name); 
// person.name = "Riya";
// console.log(person.name); 

// 6.
// let obj1 = { a: 1, b: 2 };
// let obj2 = { b: 3, c: 4 };
// let mergedObj = { ...obj1, ...obj2 };
// console.log(mergedObj);

// 7.
// let obj1 = { a: 1, b: 2 };
// let obj2 = { a: 1, b: 2 };
// console.log(obj1 === obj2); 
// function compareObjects(obj1, obj2) {
//     for (let key in obj1) {
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }
//     return true;
// }
// console.log(compareObjects(obj1, obj2));

// 8.
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// let a = new Person("Yogita", 30);
// console.log(a.name); 
// console.log(a.age);

// 9.
// const Bond = {
//   firstName: "Yogita",
//   lastName: "Kumari",
//   getFullName: function () {
//       return `${this.firstName} ${this.lastName}`.trim();
//   }
// };
// console.log(Bond.getFullName());

// 10.
// let school = {
//   name: 'Vivekananda School',
//   location: 'Delhi',
//   established: '1971',
//   a: 1000,
//   display: function () {
//       console.log(`The value of the key 20 is ${school['a']}`);
//   }
// }
// school.display();

// 11.
// let person = {
// 	gender: "female"
// }
// let person1 = Object.create(person);
// person1.name = "Shruti";
// person1.age = 20;
// person1.nationality = "Indian";
// for (let key in person1) {
// 	console.log(key);
// }		 


// 12.
// let obj1 = { 
// 	propfirst : "Name"
// } 
// console.log(obj1.propfirst); 
// delete obj1.propfirst 
// console.log(obj1.propfirst);			 


// 13.
// let parent = { x: 10 };
// let child = Object.create(parent);
// console.log(child.x); 
// console.log(child.hasOwnProperty('x'));

// 14.
// let calculator = {
//   value: 0,
//   add: function(x) {
//       this.value += x;
//       return this; 
//   },
//   multiply: function(x) {
//       this.value *= x;
//       return this; 
//   }
// };
// let result = calculator.add(5).multiply(2).value;
// console.log(result); 

// 15.
// let car = {
//   brand: "Toyota",
//   model: "Camry",
//   year: 2022,
//   isRunning: false,
//   start: function() {
//       if (!this.isRunning) {
//           this.isRunning = true;
//           console.log("The car has started.");
//       } else {
//           console.log("The car is already running.");
//       }
//   },
//   stop: function() {
//       if (this.isRunning) {
//           this.isRunning = false;
//           console.log("The car has stopped.");
//       } else {
//           console.log("The car is already stopped.");
//       }
//   },
// };
// car.start(); 
// car.stop(); 


// -----------------------------------EVENT in JavaScript---------------------------
// Events in JavaScript are actions or occurrences that happen in the browser, such as a
// user clicking a button, moving the mouse, typing on the keyboard, or the browser finishing
// loading a web page. Event handling is a fundamental aspect of web development, allowing
// developers to create interactive and dynamic web applications. Here's an overview of events
// and event handling in JavaScript:


// const div = document.getElementById('myDiv');
// div.addEventListener('mouseover', function(event) {
//     console.log('Mouse over the div!');
// });


// const button = document.getElementById('myButton');
// button.addEventListener('click', function(event) {
//     console.log('Button clicked!');
// });


// const input = document.getElementById('myInput');
// input.addEventListener('keydown', function(event) {
//     console.log('Key pressed:', event.key);
// });


// const form = document.getElementById('myForm');
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     console.log('Form submitted!');
// });


// const select = document.getElementById('mySelect');
// select.addEventListener('change', function(event) {
//     console.log('Selected option:', select.value);
// });


// ------------------------------------Event Bubbling $ Capturing--------------------------------------

// Event Bubbling-----

// document.getElementById('outer').addEventListener('click', function(event) {
//   console.log('Outer div');
// });

// document.getElementById('inner').addEventListener('click', function(event) {
//   console.log('Inner div');
// });


// -----------Another way-----------

// document.querySelector('.outer').addEventListener('click', function(event) {
//     alert('Outer DIV');
// }, false); // false means bubbling 

// document.querySelector('.middle').addEventListener('click', function(event) {
//     alert('Middle DIV');
// }, false);

// document.querySelector('.inner').addEventListener('click', function(event) {
//     alert('Inner DIV');
// }, false);



// Event Capturing-------

// document.getElementById('outer').addEventListener('click', function(event) {
//   console.log('Outer div');
// }, true); 

// document.getElementById('inner').addEventListener('click', function(event) {
//   console.log('Inner div');
// }, true);

// ------------------Another way--------

// document.querySelector('.outer').addEventListener('click', function(event) {
//     alert('Outer DIV');
// }, true); // true means capturing 

// document.querySelector('.middle').addEventListener('click', function(event) {
//     alert('Middle DIV');
// }, true); 

// document.querySelector('.inner').addEventListener('click', function(event) {
//     alert('Inner DIV');
// }, true);


// -------------------------MouseOver and MouseEnter---------------

// document.querySelector('.outer').addEventListener("mouseover",()=>{
//     console.log("Hovering");
// });

// document.querySelector('.outer').addEventListener('mouseleave', () => {
//     console.log('leave');
// });

// document.querySelector('.outer').addEventListener("mouseenter",()=>{
//     console.log("Hovering");
// });