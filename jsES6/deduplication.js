const removeDuplicates = (arr) => {
  const res = arr.filter((v, i) => numbers.indexOf(v) === i);
  return res;
};

const numbers = [1, 2, 3, 3, 4, 5, 5, 6];
