/*
while( 조건식 ){
     반복 실행될 코드 
}

continue는 반복문의 제일 마지막으로 이동해
다시 반복할지 말지를 검토한다.

*/

var count = 0;
while( count < 10){
    console.log( count );
    count++;
}

/* 
do{
    반복 실행될 코드
}while( 조건식 );


일단 한 번 실행하고서 또 할지 말지 결정하는 반복문

퀴즈를 내고 맞출 때까지 반복하는 프로그램에 유용
*/

do{
    var ans = parseInt( prompt("1+1=?") );
}while( ans != 2 );

console.log("맞췄습니다.")


