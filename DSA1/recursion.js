function fibonacci(n) {
  if (n <= 1) {
    return n;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}


const n = 3;
console.log("Fibonacci series:");
// for (let i = 0; i < n; i++) {
  console.log(fibonacci(4));
// }
