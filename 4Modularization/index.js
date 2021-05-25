// Idealnya satu berkas JS memiliki 1 tanggung jawab saja

// Modularisasi dalam pemograman
// merupakan teknik pemisahan kode menjadi modul - modul yg bersifat indepe ndent, namun bisa saling digunakan untuk membentuk suatu program yang kompleks

// Pemisahan kode menjadi modul - modul terpisah inilah yang dapat membuat kode javascript lebih mudah di organisir

// Pada Nod.js setiap berkas js adalah modul, anda bisa membagikan nilai variable, object class apapun antar modul untuk melakukannya, anda perlu mengekspor nilaipada modul tersebut


const Mahasiswa = require('./Mahasiswa');

const mhs1 = new Mahasiswa("Andesta","1612000004","Informatika");

console.log(mhs1.absen());

// Ada 3 jenis module pada node JS
// 1 Local module
// Module yang dibuat secara lokasi berlokasi pada Node.JS project Anda
// 2. Core Module
// Module bawaan node.js berlokasi di folder LIB dimana node.js terpasang pada komputer anda, core modul dapat digunakan dimana saja
// 3. Third Party Module
// Module yang dipasang melalui NPM, bila third party module dipasang secara lokal, maka module akan disimpan pada folder node-modules di node js project anda