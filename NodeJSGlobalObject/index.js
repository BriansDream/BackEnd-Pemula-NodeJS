// Node JS Global Object
// Di Browser JS dapat mengontrol fungsionalitas browser,
// Seperti mengunjungi halaman, memuat ulang, menutup tabs, serta menampilkan alert dialog.

// Javascript mampu melakukan itu karena browser menambahkan object "Window" pada Javascript


// Di Node JS pun demikian, ia menambahkan OBJECT GLOBAL guna memberikan fungsionalitas lebih pada javascript
// Hal ini bertujuan untuk mendukung pengembangan pada environtmennya 
// Contoh melalui object global kita dapat melihat berapa CPU yang digunakan pada komputer
// , Modularitas berkas JS, Menampilkan nilai pada Console dll

// Object window pada browser dan object global pada Node.JS merupakan Global Object 
// SAeluruh fungsi atau property yang menjadi member dari global object dapat diakses dimana saja, alias memiliki cakupan global

// Pada Node.JS Anda bisa melihat apa saja yang termasuk member dari global Object dengan menggunakan
// Object.getOwnPropertyNames(global);
const obj = Object.getOwnPropertyNames(globalThis);
console.log(obj);

// Dilansir dari web Node.JS, mereka hanya menambahkan beberapa object saja 
// Obejct tersebut dinamakan 'true globals'
// Berikut adalah daftarnya
// 1. Global = global namespace member apapun didalam object ini dapat diakses pada cakupan global
// 2. Process : Menyediakan interaksi dengan proses Node.js yang berjalan 
// 3. Console : Menyediakan berbagai fungsionalitas STDIO
// SetTimeOut, ClearTimeout, setinterval, clearinterval

// Ada juga object yang merupakan Pseudo-globals atau object global semu
// Object ini tidak terlihat bila dicetak menggunakan  Object.getOwnPropertyNames(globalThis);
// Sebab ia bukan member langsung dari object global
// Melainkan diturunkan dari cakupan module, karena pada Node,JS Semua berkas Javascript adalah Module

// Jadi Pseudo-globals dapat diakses layaknya global object
// 1. Module : Digunakan untuk sistem modularitas pada Node.js
// 2. _filename : keyword untuk mendapatkan lokasi berkas js yang di eksekusi , keyword ini tidak tersedia pada node.js REPLS
// 3. _dirname : Keyword untuk mendapatkan root directory dan berkas JS yang dieksekusi
// 4. require : digunakan untuk mengimporty module pad JS

