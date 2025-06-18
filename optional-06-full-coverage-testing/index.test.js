// index.test.js

// Impor fungsi sum dari index.js
import sum from './index.js'; // Menggunakan default import karena sum diekspor sebagai default

// Impor modul test runner bawaan Node.js
import assert from 'node:assert';
import { test } from 'node:test';

// Grouping tests with a describe-like functionality (using test as a container)
// Node.js's native test runner supports nesting 'test' calls.

test('fungsi sum', async (t) => {
  // Skenario Positif: Penjumlahan dua angka positif
  await t.test('should return the correct sum for two positive numbers', () => {
    assert.strictEqual(sum(1, 2), 3, '1 + 2 should be 3');
    assert.strictEqual(sum(5, 7), 12, '5 + 7 should be 12');
  });

  // Skenario Positif: Penjumlahan dengan nol
  await t.test('should return the correct sum when one or both numbers are zero', () => {
    assert.strictEqual(sum(0, 5), 5, '0 + 5 should be 5');
    assert.strictEqual(sum(10, 0), 10, '10 + 0 should be 10');
    assert.strictEqual(sum(0, 0), 0, '0 + 0 should be 0');
  });

  // Skenario Negatif: Input bukan angka (type checking)
  await t.test('should return 0 if any operand is not a number', () => {
    assert.strictEqual(sum('1', 2), 0, 'String "1" + 2 should be 0');
    assert.strictEqual(sum(1, '2'), 0, '1 + String "2" should be 0');
    assert.strictEqual(sum(null, 2), 0, 'Null + 2 should be 0');
    assert.strictEqual(sum(undefined, 2), 0, 'Undefined + 2 should be 0');
    assert.strictEqual(sum({}, 2), 0, 'Object + 2 should be 0');
    assert.strictEqual(sum(1, []), 0, '1 + Array should be 0');
    assert.strictEqual(sum('hello', 'world'), 0, '"hello" + "world" should be 0');
  });

  // Skenario Negatif: Input negatif
  await t.test('should return 0 if any operand is a negative number', () => {
    assert.strictEqual(sum(-1, 2), 0, '-1 + 2 should be 0');
    assert.strictEqual(sum(5, -3), 0, '5 + -3 should be 0');
    assert.strictEqual(sum(-5, -10), 0, '-5 + -10 should be 0');
  });

  // Skenario Gabungan: Satu input bukan angka dan negatif (meskipun sudah tertangkap oleh type checking)
  await t.test('should return 0 if input is non-numeric and negative', () => {
    assert.strictEqual(sum('-5', -10), 0, 'Non-numeric negative + negative should be 0');
  });
});