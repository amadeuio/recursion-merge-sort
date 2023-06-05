// fibonacci

// function that returns n lenght Fibonacci sequence array without recursion
function fibs(n) {
  if (n === 0) {
    return [];
  }

  if (n === 1) {
    return [0];
  }

  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

// function that returns n lenght Fibonacci sequence array with recursion
function fibsRec(n) {
  // base case
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    return [0];
  } else if (n === 2) {
    return [0, 1];
  }

  // recursive case
  var fibs = fibsRec(n - 1);
  fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
  return fibs;
}
