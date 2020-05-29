Function.prototype.delay = function (ms) {
  let f = this;
  ms = +ms || 0;
  
  return function (...args) {
    setTimeout(() => f.apply(this, args), ms);
  };
};

function f(a, b) {
  console.log(a, b);
}

f.delay(1000)(1, 2);

let user = {
  name: "Justin",
  sayHi() {
    console.log(this.name);
  },
};

user.sayHi = user.sayHi.delay(1000);

user.sayHi()
