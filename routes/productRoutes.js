const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const ProductModel = require('../models/productModel'); 

router.get('/produk', productController.getDaftarProduk);

router.get('/produk/tambah', productController.getFormTambah);
router.post('/produk/tambah', productController.postTambahProduk);

router.get('/produk/edit/:id', productController.getFormEdit);
router.post('/produk/edit/:id', productController.postUpdateProduk);

router.post('/produk/hapus/:id', productController.postHapusProduk);

router.get('/uji-keamanan', async (req, res) => {
    const inputPayload = req.query.kategori; 

    const hasil =await ProductModel.getByKategoriSecure(inputPayload);

    res.json({
        input: inputPayload,
        totalDataDitemukan: hasil.length,
        data: hasil
    });
});

module.exports = router;