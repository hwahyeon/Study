// 변수의 scope

function a(){
    var v_a = "a";
    function b(){
        var v_b="b";
        console.log("o :", typeof(v), typeof(v_a), typeof(v_b));
    }

    b();

    console.log("o :", typeof(v), typeof(v_a), typeof(v_b));

}

var v = "v";

a();

console.log("o :", typeof(v), typeof(v_a), typeof(v_b));

/*
o : string string string
o : string string undefined
o : string undefined undefined

변수의 scope는 function의 scope를 따른다.
-> 객체(변수)는 선언된 함수 안에서만 접근이 가능함.
선언된 함수 안에서 선언된 함수 (nested function)에서도 접근 가능
*/