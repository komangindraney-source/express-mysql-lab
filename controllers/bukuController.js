const BukuModel = require('../models/bukuModel');

exports.getDaftarBuku = async (req, res) => {
    try {
        const bukuList = await BukuModel.getAll();
        res.render('pages/buku-list', { pageTitle: 'Daftar Buku', bukuList });
    } catch (error) {
        console.error('[ERROR getDaftarBuku]:', error);
        res.status(500).send('Gagal memuat data buku.');
    }
};

exports.getFormTambah = (req, res) => {
    res.render('pages/buku-form-tambah', { pageTitle: 'Tambah Buku Baru' });
};

exports.postTambahBuku = async (req, res) => {
    try {
        const { judul, penulis, kategori, harga_denda, stok, tanggal_masuk } = req.body;
        await BukuModel.create({ judul, penulis, kategori, harga_denda, stok, tanggal_masuk });
        res.redirect('/buku'); // Menerapkan pola Post-Redirect-Get
    } catch (error) {
        console.error('[ERROR postTambahBuku]:', error);
        res.status(500).send('Gagal menyimpan buku baru.');
    }
};

exports.getFormEdit = async (req, res) => {
    try {
        const { id } = req.params;
        const buku = await BukuModel.getById(id);
        if (!buku) return res.status(404).send('Buku tidak ditemukan.');
        res.render('pages/buku-form-edit', { pageTitle: 'Edit Buku', buku });
    } catch (error) {
        console.error('[ERROR getFormEdit]:', error);
        res.status(500).send('Gagal memuat form edit.');
    }
};

exports.postUpdateBuku = async (req, res) => {
    try {
        const { id } = req.params;
        const { judul, penulis, kategori, harga_denda, stok, tanggal_masuk } = req.body;
        await BukuModel.update(id, { judul, penulis, kategori, harga_denda, stok, tanggal_masuk });
        res.redirect('/buku');
    } catch (error) {
        console.error('[ERROR postUpdateBuku]:', error);
        res.status(500).send('Gagal memperbarui buku.');
    }
};

exports.postHapusBuku = async (req, res) => {
    try {
        const { id } = req.params;
        await BukuModel.hapus(id);
        res.redirect('/buku');
    } catch (error) {
        console.error('[ERROR postHapusBuku]:', error);
        res.status(500).send('Gagal menghapus buku.');
    }
};