/*

switch( 비교할 값 ){
    case 값1:
        비교할 값이 값1인 경우 실행될 코드
        break;
    case 값2:
        비교할 값이 값2인 경우 실행될 코드
        break;

    
    ... 여러개의 case
    

    default:
        비교할 값이 위의 모든 값과 다른 경우 실행될 코드
        break;
}


break가 없으면 아래 코드까지 쭉 실행됨.

*/

function solution( month ){
    switch(month){
    case 1:
        return 31;
        break;
    case 2:
        return 28;
        break;
    case 3:
        return 31;
        break;
    case 4:
        return 30;
        break;
    case 5:
        return 31;
        break;
    case 6:
        return 30;
        break;
    case 7:
        return 31;
        break;
    case 8:
        return 31;
        break;
    case 9:
        return 30;
        break;
    case 10:
        return 31;
        break;
    case 11:
        return 30;
        break;
    case 12:
        return 31;
        break;}
}