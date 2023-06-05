// warmup: fibonacci

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

// merge sort

let array = [4, 8, 6, 2, 1, 7, 5, 3];

// function that takes in an array and returns a sorted array using a
// recursive merge sort methodology
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  // find the middle point to divide the array into two halves
  let mid = Math.floor(arr.length / 2);

  // call mergeSort for first half
  let left = mergeSort(arr.slice(0, mid));

  // call mergeSort for second half
  let right = mergeSort(arr.slice(mid));

  // merge the two halves sorted
  return merge(left, right);
}

// merges two sorted arrays (left and right) into a single sorted array
function merge(left, right) {
  let resultArray = [],
    leftIndex = 0,
    rightIndex = 0;

  // concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // move left array cursor
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // move right array cursor
    }
  }

  // add remaining element in left or right arrays after concatenating in order
  return resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
}

mergeSort(array); // 1, 2, 3, 4, 5, 6, 7, 8
