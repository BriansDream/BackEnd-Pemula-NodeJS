// Semakin kompleks app, semakin banyak module / package yang digunakan disini membutuhkan NPM

// NPM merupakan pengelola package untuk JS yang dapat memudahkan kita dalam mengelola package yang tersedia pada NPMJS.com

// NPM merupakan standart package manager yang disediakan oleh Node.js dan sudah otomatis terpasang ketika memasang NODE.JS Pada komputer serta NPM dapat dioperasikan melalui CMD / terminal
// Terdapat 2 tipe pemasangan modul melalui NPM yakni Global dan Lokal,
// Bila modul dipasang secara global, maka modul tersebut akan bersifat layaknya core module dan dapat digunakan dimanapun
// Sedangkan modul yang dipasang secara lokal hanya dapat digunakan pada cakupan node.js yang memasangnya

// Disarankan memasang modul pihak ketiga secara lokal saja, hindari pemasangan modul secara global karena akan menyebabkan masalah, sebaiknya gunakan npx bila anda ingin menjalankan node.js package dimanapun yang anda inginkan

// MOMENT JS merupakan salah satu modul pihak ketiga yang populer untuk mengelola waktu di node.js

// npm install moment
const moment = require('moment');
const _ = require('lodash');
const date = moment().format("MMM DD YY");
// console.log(date);
// Package yang dipasang secara lokal melalui NPM akan tercatat didalam berkas package.json, lebih tepatnya pada objek dependencies 
// Menunjukkan bahwa proyek Node.js Memiliki ketergantungan terhadap module moment
// Informasi ini berguna bila anda hendak membagikan proyek Node.js ke orang lain
// Mereka akan mengetahui modul ketiga apa yang akan di install ketika memasang proyek anda melalui perintah NPM Install
// untuk menghapus third party module
// Nom uninstall moment

const myOddEvenArray = _.partition([1,2,3,4,5,6], (n) => n%2);

console.log(myOddEvenArray);