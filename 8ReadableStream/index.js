// Readable Stream
// Membuat readable Stream dengan menggunakan method createReadStream() dari core module fs

const fs = require('fs');
// fungsi createReadStream() menerima 2 argument 
// 1. LOkasi berkas yang hendak di baca, 2. Objek konfigurasi
// Didalam objek konfigurasi bisa menetapkan ukuran buffer melalui property highWaterMark
const readableStream = fs.createReadStream('teoriReadable.txt', {
    // Nilai default dari property ini adalah 16kb, tidak perlu menetapkan property ini bila ingin tetap memiliki nilai default
    highWaterMark: 30
});

// Buffer didalam stream adalah memory sementara yang digunakan oleh stream dalam menyimpan data hingga data tersebut dikonsumsi

// createReadStream() mengembalikan EventEmitter, dimana kita dapat menetapkan fungsi listener setiap kali event readable dibangkitkan
// Event Readable akan dibangkitkan ketika buffer sudah memiliki ukuran sesuai dengan nilai yang ditetapkan pada property highwatermark (buffer siap dibaca);
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // Catch the error when the chunk cannot be read
    }
});

// Event and akan dibangkitkan setelah proses stream selesai

readableStream.on(`end`,() => {
    console.log('Done');
});