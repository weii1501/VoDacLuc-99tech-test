"use strict";

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

var sum_to_n_a = function (n) {
  let sum = 0;
  for (var i = 1; i <= n; i++) {
    sum += i;
  }

  return sum;
};

var sum_to_n_b = function (n) {
  if (n === 1) {
    return 1;
  } else {
    return n + sum_to_n_b(n - 1);
  }
};

var sum_to_n_c = function (n) {
  return Array.from({ length: n }, (_, i) => i + 1).reduce(
    (acc, curr) => acc + curr,
    0
  );
};

function askQuestion(query) {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(parseInt(answer, 10));
    });
  });
}

async function main() {
  const str = `Chọn hàm tính tổng:
    1. sum_to_n_a
    2. sum_to_n_b
    3. sum_to_n_c
Hàm bạn chọn: `;
  let result;

  let n = await askQuestion("Nhập một số nguyên: ");

  let function_name = await askQuestion(str);

  switch (function_name) {
    case 1:
      result = sum_to_n_a(n);
      break;
    case 2:
      result = sum_to_n_b(n);
      break;
    case 3:
      result = sum_to_n_c(n);
      break;
    default:
      console.log("Hàm không tồn tại");
      break;
  }

  if (result) {
    console.log(`Kết quả: ${result}`);
  }

  process.exit(0);
}

main();
