function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

function* generatePasswordCodes() {
  // 0...9
  yield* generateSequence(48, 57);

  // A...Z
  yield* generateSequence(65, 90);

  // a...z
  yield* generateSequence(97, 122);
}

function* generateAlphaNum(){
  for (let i =48; i<=57; i++) yield i
  for (let i =65; i<=90; i++) yield i
  for (let i =97; i<=122; i++) yield i
}

let str = '';

for(let code of generateAlphaNum()) {
  str += String.fromCharCode(code);
}

console.log(str)

function* gen() {
  let result1 = yield '2 + 2 = ?'

  console.log(result1)

  let result2 = yield '3 + 3 = ?'

  console.log(result2)
}

let generator = gen()

generator.next().value

generator.next(4).value

generator.next(9).value