try {
  // todo
} catch(err){
  // err {name, message, stack}
  // name Error 名称
  // message 关于 error 的详细文字描述
  // stack 当前的调用栈：用于调试目的的一个字符串，其中包含有关导致 error 的嵌套调用序列的信息。
  throw new Error(err.message)
}


let error = new Error(message);
// 或
let error = new SyntaxError(message);
let error = new ReferenceError(message);
// ...

class ValidationError extends Error {
  constructor(message) {
    super(message); // (1)
    this.name = "ValidationError"; // (2)
  }
}

function test() {
  throw new ValidationError("Whoops!");
}

try {
  test();
} catch(err) {
  alert(err.message); // Whoops!
  alert(err.name); // ValidationError
  alert(err.stack); // 一个嵌套调用的列表，每个调用都有对应的行号
}