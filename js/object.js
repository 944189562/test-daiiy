const a={b:3};
function foo(obj){
  obj.b=5
  return obj;
}

const aa=foo(a);
// console.log(a.b);
// console.log(aa)
// console.log(aa.b);

function ofo(){}

function Bick(){
  this.name='mufdsa'
}
let mtBick=new ofo();   
ofo.prototype=new Bick();

let youbick=new Bick();
console.log(mtBick);
console.log(youbick)