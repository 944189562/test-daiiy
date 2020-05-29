class User {
  constructor(name) {
    this.name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value.length < 4) {
      console.log("Name is too short.");
      return;
    }

    this._name = value;
  }
}

class Animal {
  constructor(name) {
    this.speed = 0;
    this.name = name;
  }

  run(speed) {
    this.speed = speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
  }

  stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`);
  }
}

class Rabbit extends Animal {
  _waterAmount = 0; // 受保护的属性
  // 无构造函数
  constructor(...args) {
    super(...args);
  }

  // 有构造函数
  // constructor(name, earLength){
  //   super(name)
  //   this.earLength = earLength
  // }

  set waterAmount(val) {
    if (val < 0) throw new Error("Negative water");

    this._waterAmount = val;
  }

  get waterAmount() {
    return this._waterAmount;
  }

  hide() {
    alert(`${this.name} hides`);
  }
}

let rabbit = new Rabbit("White Rabbit");

class PowerArray extends Array {
  isEmpty() {
    return this.length === 0;
  }

  static get [Symbol.species]() {
    return Array;
  }
}

// mixin
let sayHiMixin = {
  sayHi() {
    console.log(`Hello ${this.name}`);
  },
  sayBye() {
    console.log(`Bye ${this.name}`);
  },
};

class User {
  constructor(name) {
    this.name = name;
  }
}

Object.assign(User.prototype, sayHiMixin);

new User("Justin").sayHi(); // Hello Justin

let eventMixin = {
  on(eventName, handler) {
    if (!this._eventHandlers) this._eventHandlers = {};
    if (!this._eventHandlers[eventName]) {
      this._eventHandlers[eventName] = [];
    }
    this._eventHandlers[eventName].push(handler);
  },
  off(eventName, handler) {
    let handlers = this._eventHandlers && this._eventHandlers[eventName];
    if (!handlers) return;
    for (let i = 0; i < handlers.length; i++) {
      if (handlers[i] === handler) {
        handlers.splice(i--, 1);
      }
    }
  },
  trigger(eventName, ...args) {
    if (!this._eventHandlers || this._eventHandlers[eventName]) {
      return;
    }

    this._eventHandlers[eventName].forEach((handler) =>
      handler.apply(this, args)
    );
  },
};
