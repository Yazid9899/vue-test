const ERD_TEST_1 = (n) => {
  for (let i = 1; i <= n; i++) {
    let line = "";
    for (let j = 1; j <= n + 3; j++) {
      if (i + 1 === j || i + 2 === j) {
        line += "*";
      } else {
        line += j;
      }
    }
    console.log(line);
  }
};

ERD_TEST_1(4);
ERD_TEST_1(5);

const ERD_TEST_2 = (arr) => {
  let diff = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (!arr[j + i + 1] || !arr[i]) break;
      if (diff < arr[j + i + 1] - arr[i]) diff = arr[j + i + 1] - arr[i];
    }
  }
  return diff;
};
console.log(ERD_TEST_2([10, 7, 5, 8, 11, 9, 1]));
