// Import core module untuk menulis berkas
const fs = require('fs');
// membuat writeable stream dalam menulis berkas
// Menerima 1 argument berkas untuk menyimpan hasil data yang dituliskan 
const writeAbleStream = fs.createWriteStream('berkas.txt');
// Tulis berkas menggunakan method write
writeAbleStream.write("Ini adalah baris pertama menulis berkas menggunakan teknik stream\n");
writeAbleStream.write("baris ke dua, teknik stream menggunakan core module FS ");
writeAbleStream.end();


// 2. Baca berkas yang sudah di tulis menggunakan teknik ReadableStream
// createReadStream() menerima 2 argument
// 1. Lokasi berkas yg akan dibaca, 2. Objek konfigurasi
const readableStream = fs.createReadStream('berkas.txt', {
    // 10 adalah ukuran buffer (memory sementara yg digunakan dalam menyimpan data  sampai data tersebut di konsumsi)
    // Event readable akan dibangkitkan ketika buffer sudah memiliki ukuran sesuai dengan nilai yang di tetapkan pada property highwatermark
    highWaterMark: 10
});

// CreateReadStream() mengembalikan EventEmitter, dimana kita dapat menetapkan fungsi listener setiap kali event readble dibangkitkan
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // Catch the error when the chunk cannot be read
    }
})

// event End akan dibangkitkan setelah process stream selesai
readableStream.on('end', () => {
console.log('Done');
});