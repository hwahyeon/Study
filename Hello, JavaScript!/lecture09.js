// Arithmetic Operator

// 연산자를 변수 앞에 사용한 경우와 변수 뒤에 사용한 경우에 따라 변수의 값을 업데이트 하는 순서가 바뀜.
var a;

a = 1;
console.log(++a); // a = a + 1
console.log(a);

a = 1;
console.log(a++);
console.log(a);

/*
Math.pow(A,b) : A의 B승을 구해 줌
Math.sqrt(A) : A의 제곱근을 구해 줌
Math.random() : 0~1 사이의 임의의 난수를 발생시켜 줌
*/