// Inventory.js

/**
 * TODO:
 * Selesaikan kode pembuatan class Inventory dengan Ketentuan:
 * - Memiliki properti `items` untuk menampung daftar item dalam bentuk array.
 * - Memiliki method `addItem` untuk menambahkan item ke properti `items`.
 * - Memiliki method `removeItem` untuk menghapus item berdasarkan `id`.
 * - Memiliki method `listItems` untuk mengembalikan string yang merupakan informasi detail barang (dipanggil dari fungsi `item.displayDetails()`).
 */
 class Inventory {
  constructor() {
    this.items = []; // Properti `items` dalam bentuk array
  }

  addItem(item) {
    this.items.push(item); // Menambahkan item ke array `items`
  }

  removeItem(id) {
    this.items = this.items.filter(item => item.id !== id); // Menghapus item berdasarkan id
  }

  listItems() {
    if (this.items.length === 0) {
      return "No items in inventory.";
    }
    // Mengembalikan string informasi detail barang dari item.displayDetails()
    // Setiap item dipisahkan oleh baris baru
    return this.items.map(item => item.displayDetails()).join('\n');
  }
}

// Jangan hapus kode di bawah ini!
export default Inventory;