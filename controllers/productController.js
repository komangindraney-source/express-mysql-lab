const ProductModel = require('../models/productModel');

exports.getDaftarProduk = async (req, res) => {
    try {
        const produkList = await ProductModel.getAll();
        res.render('pages/produk-list', {
            pageTitle: 'Daftar Inventaris Produk',
            produkList: produkList
        });
    } catch (error) {
        console.error(`[ERROR getDaftarProduk]:`, error);
        res.status(500).send('Terjadi galat internal peladen saat mengambil data.');
    }
};

exports.getFormTambah = (req, res) => {
    res.render('pages/produk-form-tambah', { pageTitle: 'Form Tambah Produk Baru' });
};

exports.postTambahProduk = async (req, res) => {
    try {
        const { nama_produk, kategori, harga, stok } = req.body;

        // Validasi dikomentari agar parameter 'harga' yang undefined lolos ke model
        // if (!nama_produk || !kategori || !harga || !stok) {
        //     return res.status(400).send('Seluruh field formulir wajib diisi.');
        // }

        await ProductModel.create({
            nama_produk,
            kategori,
            harga: undefined, // Memaksa parameter 'harga' menjadi undefined untuk menguji validasi di model
            stok
        });

        console.log(`[DATABASE] Data "${nama_produk}" berhasil di-insert.`);
        res.redirect('/produk');
    } catch (error) {
        console.error(`[ERROR postTambahProduk]:`, error);
        res.status(500).send('Gagal menyimpan data ke basis data.');
    }
};

exports.getFormEdit = async (req, res) => {
    try {
        const { id } = req.params;
        const produk = await ProductModel.getById(id);

        if (!produk) {
            return res.status(404).send('Produk tidak ditemukan.');
        }

        res.render('pages/produk-form-edit', {
            pageTitle: 'Edit Data Produk',
            produk: produk
        });
    } catch (error) {
        console.error(`[ERROR getFormEdit]:`, error);
        res.status(500).send('Galat internal saat memuat form edit.');
    }
};

exports.postUpdateProduk = async (req, res) => {
    try {
        const { id } = req.params;
        const { nama_produk, kategori, harga, stok } = req.body;

        await ProductModel.update(id, { nama_produk, kategori, harga, stok });
        console.log(`[DATABASE] Record ID ${id} berhasil diperbarui.`);

        res.redirect('/produk');
    } catch (error) {
        console.error(`[ERROR postUpdateProduk]:`, error);
        res.status(500).send('Gagal memperbarui record data.');
    }
};

exports.postHapusProduk = async (req, res) => {
    try {
        const { id } = req.params;
        const result = await ProductModel.hapus(id);

        if (result.affectedRows === 0) {
            console.warn(`[DATABASE] Tidak ada record yang terhapus untuk ID ${id}`);
        } else {
            console.log(`[DATABASE] Record ID ${id} berhasil dihapus.`);
        }

        res.redirect('/produk');
    } catch (error) {
        console.error(`[ERROR postHapusProduk]:`, error);
        res.status(500).send('Gagal menghapus entitas dari basis data.');
    }
};