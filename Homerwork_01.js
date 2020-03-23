//Task number 1
//new solution version 1
function x(n) {
    for(var i = 1; i <= n; i++) {
      var a = "";
      for (var j = 1; j <= n; j++) {
      if ((j === i) || ((i+j) == n + 1)) {
        a += "*";
      } else {
    a += " ";    
        }
      }
      console.log(a)
  } return
}
console.log(x(9))

//new solution version 2 with object
function x(n) {
  let obj = {}
    for(var i = 1; i <= n; i++) {
      var a = "";
      for (var j = 1; j <= n; j++) {
      if ((j === i) || ((i+j) == n + 1)) {
        a += "*";
      } else {
    a += " ";
        }
      } obj[i]= a;
  } return obj;
}
console.log(x(9))

// old version
/*
var n = 9;
	for(var i = 1; i <= n; i++) {
		var a = "";
		for (var j = 1; j <= n; j++) {
     		if ((j === i) || ((i+j) == n + 1)) {
       		a += "*";
     		} else {
			a += " ";
      		}
   		} console.log (a);
 	}
*/
//Task number 2

let obj = {};
function elementInCount(arr) {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    if(arr[i] in obj) {
    obj[arr[i]] +=1;
    } else (obj[arr[i]] = 1)
  }; 
  for (let key in obj) {
    obj[key] = obj[key] / length
  }
return obj;
}

console.log(elementInCount([1, 1, 2, 2, 3]))

//Task number 3 new solution

function numberOfTypes(arr) {
  let num = 0;
  let str = 0;
  for (let i = 0; i<arr.length; i++) {
    if (typeof(arr[i]) == "number") {
      num+=1;
      } else if (typeof(arr[i]) == "string"){
      str+=1;  }
  }
return (`Strings: ${str}, Numbers: ${num}`)
}
console.log(numberOfTypes([1, 4, 'i am a string', '456']))


// Old solution of 3 
/* let array = [1, 4, 'i am a string', '456'];
let num = 0;
let str = 0;
for (let i = 0; i<array.length; i++) {
  if (typeof(array[i]) == "number") {
    num+=1;
  } else if (typeof(array[i]) == "string"){
    str+=1;  }
}
console.log(`Strings: ${str}, Numbers: ${num}`) */

//Task number 4, but I can't set  comma or hyphen split.

function longest(sen) {
  let arr = sen.split(" ");
  let length = 0;
  let word;
  for (let i=0; i<arr.length; i++) {
    if (arr[i].length > length) {
      length = arr[i].length;
      word = arr[i]
    }
  }
  return word
}

console.log(longest("A revolution without dancing is a revolution not worth having."))

// Task number 5
