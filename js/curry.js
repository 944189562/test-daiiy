function curry(f){
  return function(a){
    return function(b){
      return f(a, b)
    }
  }
}

// 用法
function sum(a, b) {
  return a + b;
}

let curriedSum = curry(sum);

alert( curriedSum(1)(2) ); // 3

function curry(func){
  return function(...args){
    if(args.length >= func.length){
      return func.apply(this, args)
    } else {
      return function(...args2){
        return curry.apply(this, args.contact(args2))
      }
    }
  }
}
