// JS에선 정수 실수 따로 구분하지 않고 Number로 봄

var b = 3.14;
var c = 1e-3;

/*
64bit로 실수와 정수 모두 표현 가능
10의 19승까지 표현할 수 있음.
정상적이지 않는 숫자나 표현할 수 없는 범위의 수를 표시하는 NaN, Infinity
*/

var height = prompt("키를 입력해주세요");
console.log(height, typeof(height))

// 프롬프트는 string으로 받는다.


// parseInt, parseFloat 

var height_int = parseInt(height);
console.log(height_int, typeof(height_int))


var height_float = parseFloat(height);
console.log(height_float, typeof(height_float))


//185.3 string
//185 'number'
//185.3 'number'

//NaN : Not a number 숫자가 아닌 경우
// Infinity ex)1/0 등을 할 때