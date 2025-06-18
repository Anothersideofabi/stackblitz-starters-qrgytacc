function fibonacci(n) {
  // Base cases:
  // Elemen Fibonacci ke-0 adalah 0
  if (n === 0) {
    return 0;
  }
  // Elemen Fibonacci ke-1 adalah 1
  if (n === 1) {
    return 1;
  }
  // Recursive step: Elemen Fibonacci ke-n adalah jumlah dari dua elemen sebelumnya
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Jangan hapus kode di bawah ini!
export default fibonacci;