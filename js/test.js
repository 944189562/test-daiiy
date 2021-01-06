function test(value) {
  return function(){
    console.log(value)
  }
}

let func = test(1)
func()
