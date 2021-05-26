// Seluruh data di komputer di kelola dan diakses melalui file system

// Core Module FS, mempermudah dalam mengakses filesystem
const fs = require('fs');
const path = require('path');


// method default asynchronouse

const fileReadCallback = (error,data) => {
    if(error) {
        console.log("Gagal mengakses berkas");
    return;
    } 
    console.log(data);
};

// method readFile menerima 3 argument, lokasi berkas, encoding & callback Function
// Untuk mengakses berkas pada komputer gunakan method fs.readFile()
fs.readFile('teoriFileSytem.txt','UTF8',fileReadCallback);
// Dari core modules path, dalam menetapkan alamat berkas secara lengkap dan dinamis
const alamatBerkas = path.resolve(__dirname,'teoriFileSystem.txt');
console.log(alamatBerkas);
// Sebagai alternatif dapat gunakan versi synschronus
// const data = fs.readFileSync('teoriFileSystem.txt','utf-8');
// console.log(data);