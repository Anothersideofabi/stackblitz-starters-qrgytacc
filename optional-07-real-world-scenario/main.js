// main.js

import {
  orders, // Mengimpor variabel orders itu sendiri
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
} from './orders.js'; // Pastikan path relatifnya benar

// Menambahkan beberapa pesanan
addOrder('Alice', [
  { name: 'Nasi Goreng', price: 20000 },
  { name: 'Teh Manis', price: 5000 },
]);

addOrder('Bob', [
  { name: 'Mie Goreng', price: 15000 },
  { name: 'Kopi', price: 10000 },
]);

console.log(orders); // Menampilkan array orders secara keseluruhan

/**
 * Output yang diharapkan:
 * [
 * {
 * id: '_someUniqueId1', // ID unik akan berbeda setiap kali dijalankan
 * customerName: 'Alice',
 * items: [
 * { name: 'Nasi Goreng', price: 20000 },
 * { name: 'Teh Manis', price: 5000 },
 * ],
 * totalPrice: 25000,
 * status: 'Menunggu'
 * },
 * {
 * id: '_someUniqueId2',
 * customerName: 'Bob',
 * items: [
 * { name: 'Mie Goreng', price: 15000 },
 * { name: 'Kopi', price: 10000 },
 * ],
 * totalPrice: 25000,
 * status: 'Menunggu'
 * }
 * ]
 */

// --- Contoh Penggunaan Lanjutan (Opsional untuk pengujian fitur lain) ---

// Ambil ID pesanan pertama untuk update/delete
const firstOrderId = orders[0].id;
const secondOrderId = orders[1].id;

console.log('\n--- Update Status Pesanan Alice ---');
updateOrderStatus(firstOrderId, 'Diproses');
console.log(orders);

console.log('\n--- Update Status Pesanan Bob menjadi Selesai ---');
updateOrderStatus(secondOrderId, 'Selesai');
console.log(orders);

console.log('\n--- Total Revenue dari Pesanan Selesai ---');
console.log('Total Revenue:', calculateTotalRevenue()); // Harusnya 25000 (dari pesanan Bob)

console.log('\n--- Hapus Pesanan Alice ---');
deleteOrder(firstOrderId);
console.log(orders);

console.log('\n--- Total Revenue Setelah Penghapusan (Harusnya tetap 25000 karena Bob sudah Selesai) ---');
console.log('Total Revenue:', calculateTotalRevenue());