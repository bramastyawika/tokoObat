 // Menangani pengiriman formulir pencarian
 document.getElementById("searchForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah pengiriman formulir secara langsung
  
  // Ambil nilai input pencarian
  var keyword = document.getElementById("searchInput").value.toLowerCase();
  
  // Ambil semua produk
  var products = document.querySelectorAll(".produk-wrapper ul");
  
  // Loop melalui setiap produk
  products.forEach(function(product) {
    var productName = product.querySelector("h3").innerText.toLowerCase(); // Ambil nama produk dan ubah ke huruf kecil
    
    // Periksa apakah nama produk mengandung kata kunci pencarian
    if (productName.includes(keyword)) {
      // Jika cocok, tampilkan produk
      product.style.display = "block";
    } else {
      // Jika tidak cocok, sembunyikan produk
      product.style.display = "none";
    }
  });
});

// Mendapatkan semua elemen tombol "Beli"
var buttons = document.querySelectorAll('.produk a');

// Loop melalui setiap tombol4
buttons.forEach(function(button) {
  // Menambahkan event listener untuk setiap tombol
  button.addEventListener('click', function(event) {
    // Mencegah aksi bawaan dari link
    event.preventDefault();
    // Menampilkan kotak pesan konfirmasi
    var confirmation = confirm("Konfirmasi Pembelian");
    // Jika pengguna menekan OK, lakukan sesuatu
    if (confirmation) {
      // Lakukan tindakan sesuai kebutuhan, misalnya arahkan pengguna ke halaman pembelian
      window.location.href = button.href; // Mengarahkan pengguna ke halaman pembelian
    } else {
      // Jika pengguna menekan Batal, tidak perlu dilakukan apa pun
      return false;
    }
  });
});