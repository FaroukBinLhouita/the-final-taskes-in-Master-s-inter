// 1- Find dup in array
function findDuplicates(arr) {
  const duplicates = [];
  const seen = {};

  for (const num of arr) {
    seen[num] = seen[num] ? seen[num] + 1 : 1;
  }

  for (const num in seen) {
    if (seen[num] > 1) {
      duplicates.push(parseInt(num));
    }
  }

  return duplicates;
}

// 2- Prime
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;

  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function primesInRange(start, end) {
  const primes = [];

  for (let i = start; i <= end; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes;
}

// 3- Sorting
function sortWordsByLength(sentence) {
  return sentence
    .split(" ")
    .sort((a, b) => a.length - b.length)
    .join(" ");
}

// 4- Filtering
function filterArray(arr, callback) {
  const filteredArray = [];

  for (const item of arr) {
    if (callback(item)) {
      filteredArray.push(item);
    }
  }

  return filteredArray;
}
