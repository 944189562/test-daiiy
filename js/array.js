function shuffle(arr) {
  for (let i = 0, len = arr.length; i < len; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

const count = {
  "123": 0,
  "132": 0,
  "213": 0,
  "231": 0,
  "312": 0,
  "321": 0,
};

for (let i = 0; i < 1000000; i++) {
  let arr = [1, 2, 3];
  shuffle(arr);
  count[arr.join('')]++;
}

// 显示所有可能排列的出现次数
for (let key in count) {
  console.log(`${key}: ${count[key]}`);
}