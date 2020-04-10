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

// Task 2 solution in class

function frequency(arr){
	let elemCounts = {};

	for (let i = 0; i< arr.length; i++) {
		if (arr[i] in elemCounts) {
			elemCounts[arr[i]] +=1 / arr.length;
		} else {
			elemCounts[arr[i]] = 1 / arr.length;
		}
	}

	return elemCounts;
}
console.log(elemCounts([1, 1, 2, 2, 3]))

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

//task 3 solution in class short version

function typesOf (arr) {
	let numbersCount = 0;
	let strCount = 0;
	for(let i = 0; i< arr.length; i++) {
		if(typeof arr[i] === 'number'){
			numbersCount++; 
		} else {
			strCount++;
		}
	}

	return `Numbers: ${numbersCount}, Strings: ${strCount}`
}
console.log(typesOf([1, 4, 'i am a string', '456']))

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

//Task 4 in class
function getBiggiestWord (str) {
	let result = 0;
	let wordQuantity = 0;
	let arr = str.split(",");
		str = arr.join("");
		arr = str.split("-");
		str = arr.join("");
		arr = str.split(".");
		str = arr.join("");
		arr = str.split(" ");
		str = arr.join("");

		for (let i = 0; i<arr.length; i++) {
			if (arr[i].length >= wordQuantity) {
				wordQuantity = arr[i].length;
				result = arr[i];
			}
		}

		return result;
}

console.log(getBiggiestWord("A revolution without dancing is a revolution not worth having."))


// Task number 5 in lesson
//Write a function to find longest substring in a given a string without repeating characters except space character. If there are several, return the last one. Consider that all letters are lowercase

function langsteSub(str) {
	let subStrArr = [];
	let longStr = [];

	let indexHolder;
	let max = -Infinity;

	for (let i = 0; i<str.length; i++){
		if (str[i] === ' ' || subStrArr.indexOf(str[i]) === -1) {
			subStrArr.push(str[i]);
		} else {
			if(subStrArr.join('').length >= max) {
				max = subStrArr.join('').length;
				longStr.push(subStrArr.join(''));
			} 
			if(str[i] !== ' ' && subStrArr.indexOf(str[i]) > -1) {
				indexHolder = subStrArr.indexOf(str[i]);
				subStrArr.splice(0, indexHolder + 1);
				subStrArr.push(str[i]);
			}
		}
		if (i === str.length - 1 && subStrArr.join('').length >= max){
			longStr.push(subStrArr.join(''))
		}
	}
	return longStr[longStr.length - 1];
}

console.log(langsteSub('12345123451234'));


//task 5 2-rd lucum

function longestLastSubstring(sentence) {
	let result = '';

	for (let i = 0; i < sentence.length; i++) {
		let nestU = '';
		for (let j = i; j < sentence.length; j++) {
			if (nestU.indexOf(sentence[j]) === -1 || sentence[j] === ' ') {
				nestU += sentence[j];
			} else {
				break;
			}
		}
		if (nestU.length >= result.length) {
			result = nestU;
		}
	}
	return result;
}

console.log(longestLastSubstring('1234123'))
//Task 6  in lesson


