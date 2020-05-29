// debounce 该包装器最多允许每隔 ms 毫秒将调用传递给 f 一次。换句话说，当我们调用 “debounced” 函数时，它保证之后所有在距离上一次调用的时间间隔少于 ms 毫秒的调用都会被忽略。
function debounce(f, ms) {
  if (typeof func !== "function") {
    throw new TypeError("need a function");
  }
  ms = +ms || 0;

  let timeId;
  
  return function () {
    if (timeId) {
      clearTimeout(timeId);
    }

    timeId = setTimeout(() => f.apply(this, arguments), ms);
  };
}

// throttle “节流”装饰者 throttle(f, ms) —— 返回一个包装器，最多每隔 ms 将调用传递给 f 一次。那些属于“冷却”期的调用将被忽略。
function throttle(f, ms) {
  let isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {
    if (isThrottled) {
      // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    f.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}
