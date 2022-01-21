var uninitialized_var;

// 변수를 선언만하고 초기화를 하지 않으면, undefined가 뜬다.
// type도 undefined로 뜬다.

var obj={
            x:1,
            y:2
};

//정의되지 않은 속성에 접근하면, ex) obj.z
// 이런 경우도 undefined

var null_var = null;
// 개발자가 명시적으로 비어있는 상태를 나타낼 때 사용