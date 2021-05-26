// Writable Stream
// Pada materi sebelumnya sudah belajar bagaimana membaca berkas menggunakan teknik stream(readable stream)

// Teknik stream juga dapat digunakan untuk menulis berkas
// Teknik ini disebut (writable stream)

// Untuk membuat Writable Stream dalam menulis berkas gunakan method createWriteStream() dari core module FS

const fs = require('fs');
// fungsi ini menerima 1 argument yakni alamat berkas untuk menyimpan hasil data yang dituliskan
const writeableStream = fs.createWriteStream('teoriWritableStream.txt');
// Berkas output akan dibuat secara otomatis jika tidak ada, namun bila berkas tersebut sudah ada, maka data sebelumnya akan tertimpa

// Untuk menuliskan data pada WritableStream gunakan method write
writeableStream.write('Ini merupakan baris pertama\n');
writeableStream.write("ini merupakan baris kedua");
// Method End() digunakan untuk menandakan akhir dari Writable Stream sekaligus bisa digunakan sebagai penulisan writable terakhir
writeableStream.end();
