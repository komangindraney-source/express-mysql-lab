const express = require('express');
const router = express.Router();
const bukuController = require('../controllers/bukuController');

// Rute untuk menampilkan daftar buku
router.get('/', bukuController.getDaftarBuku);

// Rute untuk menampilkan form tambah buku
router.get('/tambah', bukuController.getFormTambah);

// Rute untuk memproses penambahan buku baru (POST)
router.post('/tambah', bukuController.postTambahBuku);

// Rute untuk menampilkan form edit buku berdasarkan ID
router.get('/edit/:id', bukuController.getFormEdit);

// Rute untuk memproses pembaruan data buku (POST)
router.post('/edit/:id', bukuController.postUpdateBuku);

// Rute untuk memproses penghapusan data buku (POST/GET tergantung implementasi form)
router.post('/hapus/:id', bukuController.postHapusBuku);

module.exports = router;