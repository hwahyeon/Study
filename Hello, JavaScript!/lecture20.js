// method, this


function f(){
    console.log(this);
    console.log("f is called");
}

function setName(name){
    this.name=name;
}
var o = {name:"object", method:f, setName:setName};
var o2 = {name:"", setName:setName};

o.setName("Object1");
o2.setName("Object2");

console.log( o, o2 );


/* 
{ name: 'Object1',
  method: [Function: f],
  setName: [Function: setName] } { name: 'Object2', setName: [Function: setName] }

*/ 