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




// ---------------------Class Questions------------------------

// 1 . Given a sentence, capitalize the first character of each word.
// 	input - this is javascript
// 	output - This Is JavaScript

// function capitalSentence(sentence) {
//     let N = sentence.split(" ");
//     let X = N.map(n => n.charAt(0).toUpperCase() + n.slice(1));
//     let capital = X.join(" ");
//     return capital;
// }
// let a = "this is javascript";
// let b = capitalSentence(a);
// console.log(b);  


// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
// 	input - ["javascript", "react", "node"]
// 	output - [true, false, false]
	
// 	input - ["java","python","c"]
// 	output - [false, false, false]
// function check(arr) {
//     return arr.map(item => item.toLowerCase().includes("javascript"));
// }
// let A = ["javascript", "react", "node"];
// let B = check(A);
// console.log(B); 

// let X = ["java", "python", "c"];
// let Y = check(X);
// console.log(Y); 


// 3. Given a string which contains an email address, return true if the given email is valid, else return false.
// 	input - puran@navgurukul.org
// 	output - true
	
// 	input - puran@navgurukul
// 	output - false
	
// 	input - puran@gmail.com
// 	output - true

// function isValidEmail(email) {
//     const emailChar = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
//     return emailChar.test(email);
// }
// let email1 = "puran@navgurukul.org";
// console.log(isValidEmail(email1)); 

// let email2 = "puran@navgurukul";
// console.log(isValidEmail(email2)); 

// let email3 = "puran@gmail.com";
// console.log(isValidEmail(email3)); 


// 4. Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// 	input - below, elbow
// 	output - true

// 	input - night, thing
// 	output - true
// function anagrams(str1, str2) {
//     const sortString = (str) => str.split('').sort().join('');
//     const s = sortString(str1.toLowerCase());
//     const s2 = sortString(str2.toLowerCase());
//     return s === s2;
// }
// console.log(anagrams('below', 'elbow'));    
// console.log(anagrams('night', 'thing'));    

// 5. Reverse the given sentence.
// 	input- i am learning javascript.
// 	output - tpircsavaj gninrael ma i
// function reverse(sen) {
//     return sen.split('').reverse().join('');
// }
// const A = 'i am learning javascript.';
// const B = reverse(A);
// console.log(B); 


// 6. Reveres the given string word by word then return the reversed string.
// 	input - Success comes to those who work hard
// 	output - hard work who those to comes Success
// function reverseWords(sent) {
//     let A = sent.split(" ");
//     let revWords = A.reverse();
//     let revSent = revWords.join(" ");
//     return revSent;
// }
// let X = "Success comes to those who work hard";
// let revStr = reverseWords(X);
// console.log(revStr);



// let input = document.getElementById("input");
// let btn = document.getElementById("btn");
// let output = document.getElementById("output");
// let reverseBtn = document.getElementById("reverse");
// let reverseWords = document.getElementById("reverseWords");

// btn.addEventListener("click", () => {
//     function capitalSentence(sentence) {
//         let N = sentence.split(" ");
//         let X = N.map(n => n.charAt(0).toUpperCase() + n.slice(1));
//         let capital = X.join(" ");
//         return capital;
//     }
//     let inputValue = "this is javascript";
//     let b = capitalSentence(inputValue);
//     output.innerHTML = b;
// });

// reverseBtn.addEventListener("click", () => {
//     function reverse(sen) {
//         return sen.split('').reverse().join('');
//     }
//     const A = 'i am learning javascript.';
//     const B = reverse(A);
//     output.innerHTML = B;
// });

// reverseWords.addEventListener("click", () => {
//     function reverseWords(sent) {
//         let A = sent.split(" ");
//         let revWords = A.reverse();
//         let revSent = revWords.join(" ");
//         return revSent;
//     }
//     let inputValue = input.value;
//     let revStr = reverseWords(inputValue);
//     output.innerHTML = revStr;
// });

// ---------------Factorial------------------
function factorial(n) {
    if (n < 0) return undefined; 
    let result = 1;
    for (let i = 1; i <= n; i++) {
      result *= i;
    }
    return result;
  }
  console.log(factorial(5));
  
//-------------------------counter---------------
  function recursiveCounter(count, max) {
    if (count > max) {
      return; 
    }
    console.log(count); 
    recursiveCounter(count + 1, max); 
  }
  recursiveCounter(1, 10); 
  
// -----------------------power------------------

  function power(base, exponent) {
    if (exponent === 0) {
      return 1;
    }
    return base * power(base, exponent - 1);
  }
  console.log(power(2, 3));


  // --------------sum of all element in arr-----------

  function sumArray(arr) {
    if (arr.length === 0) {
      return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
  }
  const arr = [1, 5, 2];
  console.log(sumArray(arr));
  


// ----------Callback hell--------------

function preparedFood(foodDelivered){
  setTimeout(()=>{
      console.log("Food is being prepared");
      console.log("Food is ready");
      foodDelivered();
  }, 7000);

}

function deliveredFood(){
  setTimeout(()=>{
      console.log("Food is delivered to your table");
  }, 3000)

}

function eatingFood(){
  setTimeout(()=>{
      console.log("Eating Food");
  }, 2000)
}

function payment(){
  setTimeout(()=>{
      console.log("Payment");
  }, 1000)
}
function leaveHotel(){
  console.log("Leave the Hotel");
}


function visitingHotel(){
  console.log("Entering the Hotel");
  console.log("Order Food - Biryani ");
  preparedFood(deliveredFood);
  
}

visitingHotel();