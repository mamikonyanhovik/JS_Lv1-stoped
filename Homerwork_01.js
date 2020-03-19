//Task number 1

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

//Task number 2


//Task number 3

let array = [1, 4, 'i am a string', '456'];
let num = 0;
let str = 0;
for (let i = 0; i<array.length; i++) {
  if (typeof(array[i]) == "number") {
    num+=1;
  } else if (typeof(array[i]) == "string"){
    str+=1;  }
}
console.log(`Strings: ${str}, Numbers: ${num}`)

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

