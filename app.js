// a1
// function print (parent) {
//        return function (child) { 
//             console.log(parent + child)
//          }
//      }
//      let innerFunction = print(5);
//      innerFunction(5);


// a2
// let arr = [2, 5, 9, 6];
// function contains(arr, element) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             return true;
//         }
//     }
//     return false;
// }
// console.log(contains(arr, 5));

// a3
// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);
// const element = document.getElementById("div1");
// element.appendChild(para);

// a5
// let back = document.getElementById("myDiv").style.backgroundColor;
// document.getElementById("demo").innerHTML = back

// a6 this function is used to save object to localstorage
// function createItem() {
//     localStorage.mytime = Date.now();
//   }

//a7 this is used to retrieve the object from local storage
// function myFunction() {
//     var x = localStorage.getItem("mytime");
//     document.getElementById("demo").innerHTML = x;
//   }