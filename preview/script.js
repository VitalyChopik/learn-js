function pow(x, n) {
  let result = 1;
  for (i = 0; i < n; i++) {
    result *= x;
  }
  return result;
}


function pow(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
}

pow(2, 5)



