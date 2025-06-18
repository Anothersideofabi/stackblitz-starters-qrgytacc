import factorial from './factorial.js';
import fibonacci from './fibonacci.js';

const numberForFactorial = 5;
console.log(`Faktorial dari ${numberForFactorial} adalah ${factorial(numberForFactorial)}`);
/*
 * Output yang diharapkan:
 * Faktorial dari 5 adalah 120
 */

const numberForFibonacci = 10;
console.log(`Deret Fibonacci hingga elemen ${numberForFibonacci} adalah:`);
// Perulangan ini akan mencetak setiap elemen deret Fibonacci
for (let i = 0; i <= numberForFibonacci; i++) {
  console.log(`[${fibonacci(i)}]`); // Menggunakan fibonacci(i) untuk mendapatkan elemen ke-i
}

/*
 * Output yang diharapkan:
 * Deret Fibonacci hingga elemen 10 adalah:
 * [ 0 ]
 * [ 1 ]
 * [ 1 ]
 * [ 2 ]
 * [ 3 ]
 * [ 5 ]
 * [ 8 ]
 * [ 13 ]
 * [ 21 ]
 * [ 34 ]
 * [ 55 ]
 */