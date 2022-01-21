//변수의 shadowing

function shadowing_example(){
    var val = 5;
    console.log("F", val);
    val++;
}

var val = 0;
shadowing_example();
console.log("O", val);


/*
F 5
O 0


변수의 Shadowing
함수 안밖에서 같은 이름의 변수를 사용하는 경우

함수 밖의 변수는 잠시 가려지고 (shadowing) 함수 안에서의 변수를 사용 (함수 밖 변수의 값은 변하지 않음)
*/

function printTimesTable(a){
    for( var i = 1 ; i <= 9 ; i++ ){
        console.log( a + " * " + i + " = " + a*i );
    }
}

for( var i = 2 ; i <= 9 ; i++ ){
    printTimesTable(i);
}

