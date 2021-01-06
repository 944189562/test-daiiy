var courseLists = [
  {
    name: "My Courses",
    courses: [
      {
        id: 511019,
        title: "React for Beginners",
        covers: [
          {
            width: 150,
            height: 200,
            url: "http://placeimg.com/150/200/tech",
          },
          {
            width: 200,
            height: 200,
            url: "http://placeimg.com/200/200/tech",
          },
          {
            width: 300,
            height: 200,
            url: "http://placeimg.com/300/200/tech",
          },
        ],
        tags: [
          {
            id: 1,
            name: "JavaScript",
          },
        ],
        rating: 5,
      },
      {
        id: 511020,
        title: "Front-End automat workflow",
        covers: [
          {
            width: 150,
            height: 200,
            url: "http://placeimg.com/150/200/arch",
          },
          {
            width: 200,
            height: 200,
            url: "http://placeimg.com/200/200/arch",
          },
          {
            width: 300,
            height: 200,
            url: "http://placeimg.com/300/200/arch",
          },
        ],
        tags: [
          {
            id: 2,
            name: "gulp",
          },
          {
            id: 3,
            name: "webpack",
          },
        ],
        rating: 5,
      },
    ],
  },
  {
    name: "New Release",
    courses: [
      {
        id: 511022,
        title: "Vue2 for Beginners",
        covers: [
          {
            width: 150,
            height: 200,
            url: "http://placeimg.com/150/200/nature",
          },
          {
            width: 200,
            height: 200,
            url: "http://placeimg.com/200/200/nature",
          },
          {
            width: 300,
            height: 200,
            url: "http://placeimg.com/300/200/nature",
          },
        ],
        tags: [
          {
            id: 1,
            name: "JavaScript",
          },
        ],
        rating: 5,
      },
      {
        id: 511023,
        title: "Angular2 for Beginners",
        covers: [
          {
            width: 150,
            height: 200,
            url: "http://placeimg.com/150/200/people",
          },
          {
            width: 200,
            height: 200,
            url: "http://placeimg.com/200/200/people",
          },
          {
            width: 300,
            height: 200,
            url: "http://placeimg.com/300/200/people",
          },
        ],
        tags: [
          {
            id: 1,
            name: "JavaScript",
          },
        ],
        rating: 5,
      },
    ],
  },
];

/* 
var result = courseList
不得直接使用索引 covers[0]，請用 concatAll, map, filter, forEach 完成
result 結果為 [
    {
      id: 511019,
      title: "React for Beginners",
      cover: "http://placeimg.com/150/200/tech"
    }, {
      id: 511020,
      title: "Front-End automat workflow",
      cover: "http://placeimg.com/150/200/arch"
    }, {
      id: 511022,
      title: "Vue2 for Beginners",
      cover: "http://placeimg.com/150/200/nature"
    }, {
      id: 511023,
      title: "Angular2 for Beginners",
      cover: "http://placeimg.com/150/200/people"
    },
 ]
*/

Array.prototype.concatAll = function () {
  const result = [];
  this.forEach((item) => {
    result.push(...item);
  });

  return result;
};

const courseList = courseLists
  .map((list) =>
    list.courses
      .map((course) =>
        course.covers
          .filter((cover) => cover.width === 150 && cover.height === 200)
          .map((item) => ({
            id: course.id,
            title: course.title,
            cover: item.url,
          }))
      )
      .concatAll()
  )
  .concatAll();

/*

function Producer() {
  if (!(this instanceof Producer)) {
    throw new Error("Please use new Producer()");
  }

  this.listeners = [];
}

Producer.prototype.addListener = function (listener) {
  if (!(typeof listener === "function")) {
    throw new Error("listener must be Function");
  }

  this.listeners.push(listener);
};

Producer.prototype.removeListener = function (listener) {
  if (this.listeners.indexOf(listener) === -1) {
    return;
  }

  this.listeners.splice(this.listeners.indexOf(listener), 1);
};

Producer.prototype.notify = function (message) {
  this.listeners.forEach((listener) => listener(message));
};
*/

class Producer {
  constructor() {
    this.listeners = [];
  }

  addListener(listener) {
    if (!(typeof listener === "function")) {
      throw new Error("listener must be Function");
    }

    this.listeners.push(listener);
  }

  removeListener(listener) {
    if (this.listeners.indexOf(listener) === -1) {
      return;
    }

    this.listeners.splice(this.listeners.indexOf(listener), 1);
  }

  notify(message) {
    console.log(this.listeners);
    this.listeners.forEach((listener) => listener(message));
  }
}

let egghead = new Producer();

function listener1(message) {
  console.log(message, "from listener1");
}

function listener2(message) {
  console.log(message, "from listener2");
}

egghead.addListener(listener1);
egghead.addListener(listener2);

// egghead.notify('test')

/*
function IteratorFromArray(arr){
  if(!(this instanceof IteratorFromArray)) {
    throw new Error('請用 new IteratorFromArray()!');
  }

  this._array = arr;
  this._cursor = 0;
}

IteratorFromArray.prototype.next = function(){
  return this._cursor < this._array.length ?
    {value: this._array[this._cursor++], done: false} :
    {done: true}
}
*/

class IteratorFromArray {
  constructor(arr) {
    this._array = arr;
    this._cursor = 0;
  }

  next() {
    return this._cursor < this._array.length
      ? { value: this._array[this._cursor++], done: false }
      : { done: true };
  }
}
