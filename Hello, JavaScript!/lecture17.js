// while 문
var sum = 0;
var i = 0; //초기 설정 코드
while( i < 5 /*조건식*/ ){
    sum = sum + i;
    i++; // 업데이트 코드
}

//for문
var sum = 0;
for( var i = 0 ; i < 5 ; i++ ){
    sum = sum + i;
}



var array = [1,2,3,4,5,6,7,8,9,10];

for( var i = 0 ; i < array.length ; i++ ){
    // 반복 실행할 코드
    console.log( array[i] );
}

/*
break를 만났을 때
for문인 경우 update구문으로 이동 (위 코드에선 i++를 먼저 실행함)
while문인 경우 반복실행 코드의 끝으로 이동한 다음, 바로 조건식 검사
*/

// for 문

var obj ={
    name : "Object",
    weight :30,
    isObject : true,
    arr:[1,2,3],
    obj:{property:1}
}

var property_list = Object.keys(obj);

for( var i=0 ; i<property_list.length ; i++ ){
    var propertyName = property_list[i];
    console.log( "\t", propertyName, ": ", obj[propertyName] );
}

// for in 문
// object property 반복이 쉽다.
// 객체 속성의 이름으로 값에 접근하는 것임.

for( var propertyName in obj ){
    console.log( "\t", propertyName, ": ", obj[propertyName] );
}

// 해당 속성을 가지고 있는지의 여부를 in으로 할 수 있다.
"name" in obj;
//true
"age" in obj;
//false