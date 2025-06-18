// orders.js

// Fungsi untuk menghasilkan ID unik
function generateUniqueId() {
  return `_${Math.random().toString(36).slice(2, 9)}`;
}

// TODO: buatlah variabel yang menampung data orders
let orders = []; // Menggunakan array untuk menampung semua pesanan

// TODO: selesaikan fungsi addOrder
function addOrder(customerName, items) {
  // Hitung total harga
  const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  // Buat objek pesanan baru
  const newOrder = {
    id: generateUniqueId(),
    customerName: customerName,
    items: items,
    totalPrice: totalPrice,
    status: 'Menunggu', // Status awal selalu "Menunggu"
  };

  // Tambahkan pesanan baru ke array orders
  orders.push(newOrder);

  return newOrder; // Mengembalikan pesanan yang baru ditambahkan (opsional, tapi berguna)
}

// TODO: selesaikan fungsi updateOrderStatus
function updateOrderStatus(orderId, status) {
  const orderIndex = orders.findIndex(order => order.id === orderId);

  if (orderIndex !== -1) {
    // Memperbarui status pesanan jika ditemukan
    orders[orderIndex].status = status;
    return true; // Berhasil diperbarui
  }
  return false; // Pesanan tidak ditemukan
}

// TODO: selesaikan fungsi calculateTotalRevenue dari order yang berstatus Selesai
function calculateTotalRevenue() {
  // Filter pesanan yang berstatus "Selesai"
  const completedOrders = orders.filter(order => order.status === 'Selesai');

  // Hitung total revenue dari pesanan yang selesai
  const totalRevenue = completedOrders.reduce((sum, order) => sum + order.totalPrice, 0);

  return totalRevenue;
}

// TODO: selesaikan fungsi deleteOrder
function deleteOrder(id) {
  const initialLength = orders.length;
  // Filter array orders, pertahankan hanya pesanan yang ID-nya tidak sama dengan ID yang akan dihapus
  orders = orders.filter(order => order.id !== id);
  // Mengembalikan true jika ada pesanan yang dihapus (panjang array berubah)
  return orders.length < initialLength;
}

// Export semua fungsi dan variabel orders
export {
  orders, // Export variabel orders agar bisa diakses dari luar
  addOrder,
  updateOrderStatus,
  calculateTotalRevenue,
  deleteOrder,
};