// 배열은 엘리먼트(변수)의 연속된 공간
// 엘리먼트에는 어떤 자료형이든 저장될 수 있음
var mixed_arr = [ 1, true, 3.14, "string", {name:"object"}, [1,2,3] ];

mixed_arr.length
//6

/*
.push(element) : 배열의 뒤에 엘리먼트 추가
.pop() : 배열의 뒤에서 엘리먼트 삭제하고 리턴
.shift() : 배열의 앞에서 엘리먼트 삭제하고 리턴
.unshift(element) : 배열의 앞에 엘리먼트 추가
*/

var str="1,2,3,4,5";
arr = str.split(",");

//arr = ["1", "2", "3", "4", "5"];