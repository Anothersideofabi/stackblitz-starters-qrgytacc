// index.test.js

// Impor fungsi sum dari index.js
import { sum } from './index.js'; // Pastikan path ini benar relatif terhadap index.test.js

// Impor modul test runner bawaan Node.js
import assert from 'node:assert';
import { test } from 'node:test';

// Tulis kasus uji untuk fungsi sum
test('fungsi sum harus mengembalikan jumlah dua angka', () => {
  // Skenario Positif
  assert.strictEqual(sum(1, 2), 3, 'Penjumlahan 1 dan 2 harus 3');
  assert.strictEqual(sum(-1, 5), 4, 'Penjumlahan -1 dan 5 harus 4');
  assert.strictEqual(sum(0, 0), 0, 'Penjumlahan 0 dan 0 harus 0');
});

test('fungsi sum harus menangani angka desimal', () => {
  assert.strictEqual(sum(0.1, 0.2), 0.30000000000000004, 'Penjumlahan 0.1 dan 0.2 harus 0.3 (float precision)');
  // Catatan: JavaScript floating point arithmetic bisa tidak tepat.
  // Dalam test nyata, Anda mungkin menggunakan 'assert.ok(Math.abs(sum(0.1, 0.2) - 0.3) < 1e-9)'
  // Tetapi untuk tujuan ini, strictEqual dengan nilai eksak float bisa diterima jika itu yang diharapkan.
  // Mari kita pakai assert.equal saja untuk menghindari presisi float jika tidak diminta ketat
  // atau hanya tes integer. Untuk ujian ini, mungkin mereka ingin Anda melihat masalah presisi float.
  // Atau lebih aman, tes dengan integer saja jika tidak ada panduan khusus.
});

// Contoh pengujian untuk skenario lain (opsional, tergantung seberapa detail yang diminta)
test('fungsi sum harus mengembalikan nilai yang benar untuk angka besar', () => {
  assert.strictEqual(sum(1000000000, 2000000000), 3000000000, 'Penjumlahan angka besar');
});

// Jika Anda ingin menggunakan Bun (ganti import dan cara menjalankan tes)
// import { test, expect } from 'bun:test'; // Bun test runner memiliki expect API mirip Jest

// test('fungsi sum harus mengembalikan jumlah dua angka', () => {
//   expect(sum(1, 2)).toBe(3);
//   expect(sum(-1, 5)).toBe(4);
//   expect(sum(0, 0)).toBe(0);
// });