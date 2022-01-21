var str="abcdeabcde";

str.charAt(0);
//"a"

str.length
//10

str.charAt(10);
//""

str[1];
//"b"

str[-1];
//undefined

str.substring(2,4);
//"cd"

str.substr(2,4);
//"cdea"

str.substring(2);
//"cdeabcde"

str.substr(2);
//"cdeabcde"

str.substr(-7);
//"deabcde"

str.indexOf("bc");
//1

str.lastIndexOf("bc");
//6

str.lastIndexOf("f");
//-1 존재하지 않을 때

/*
arr1.concat(arr2) : arr1과 arr2 붙임
arr.indexOf(element) : arr에서 element가 있는 첫 위치를 검색
arr.lastIndexOf(element) : arr에서 element가 있는 마지막 위치를 검색
*/