# Tugas Proyek 3 - Modul Buku Perpustakaan (Express.js & MySQL)

## Identitas Saya
* Nama: Komang Indra Wirawan
* NIM: 42530039
* Link Repositori:  https://github.com/komangindraney-source/express-mysql-lab

## Sekilas Tentang Proyek yang saya buat
Proyek ini dibuat dengan menerapkan arsitektur MVC (Model-View-Controller) agar struktur kodenya lebih terstruktur 


## Ringkasan Pengujian Fitur (Traceability Matrix)
Berikut adalah hasil uji coba fitur CRUD untuk modul Buku yang telah diuji langsung pada peramban:

1. Create (Tambah Data)
   * Keterangan: Mengisi form tambah buku dan menyimpannya ke database melalui metode POST dan pola PRG (Post-Redirect-Get).
   * Status: Berhasil
  
2. Read (Tampil Data)
   * Keterangan: Menampilkan seluruh data buku dalam bentuk daftar tabel yang rapi beserta format tanggal dan angka.
   * Status: Berhasil
     
3. Update (Edit Data)
   * Keterangan: Mengubah data buku menggunakan rute dinamis (/buku/edit/:id) dengan formulir yang sudah terisi data sebelumnya (pre-filled).
   * Status: Berhasil

4. Delete (Hapus Data)
   * Keterangan: Menghapus data buku dari tabel berdasarkan ID-nya dengan konfirmasi sederhana pada sisi klien.
   * Status: Berhasil
