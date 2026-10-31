const db = require('../config/database');

const BukuModel = {
    getAll: async () => {
        const [rows] = await db.query('SELECT * FROM buku ORDER BY id DESC');
        return rows;
    },

    getById: async (id) => {
        const [rows] = await db.query('SELECT * FROM buku WHERE id = ?', [id]);
        return rows[0];
    },

    create: async (data) => {
        const { judul, penulis, kategori, harga_denda, stok, tanggal_masuk } = data;
        const [result] = await db.query(
            'INSERT INTO buku (judul, penulis, kategori, harga_denda, stok, tanggal_masuk) VALUES (?, ?, ?, ?, ?, ?)',
            [judul, penulis, kategori, harga_denda, stok, tanggal_masuk]
        );
        return result;
    },

    update: async (id, data) => {
        const { judul, penulis, kategori, harga_denda, stok, tanggal_masuk } = data;
        const [result] = await db.query(
            'UPDATE buku SET judul = ?, penulis = ?, kategori = ?, harga_denda = ?, stok = ?, tanggal_masuk = ? WHERE id = ?',
            [judul, penulis, kategori, harga_denda, stok, tanggal_masuk, id]
        );
        return result;
    },

    hapus: async (id) => {
        const [result] = await db.query('DELETE FROM buku WHERE id = ?', [id]);
        return result;
    }
};

module.exports = BukuModel;