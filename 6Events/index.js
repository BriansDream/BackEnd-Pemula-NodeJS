// Events
// Aplikasi node js biasanya dikenal memiliki pola event driven atau memiliki alur berdasarkan suatu kejadian
// Membuat keputusan, bertindak berdasarkan kejadian 

//  Dengan pola imperatif (menulis kode secara runut) susah membangun program yang dapat menangani suatu kejadian
// karena tidak tau kapan suatu kejadian akan terjadi 
// Program komputer harus bekerja dengan pola even driven, node JS dapat menerapkan pola tersebut dengan mudah

// Node JS menyediakan eventEmitter CLASS yang merupakan member dari Events Core Module

const {EventEmitter} = require('events');
// Setiap instance dari EventEmitter() akan memiliki fungsi ON, pada fungsi tersebut dapat menentukan AKSI
// berdasarkan sebuah kejadian
const myEventEmitter = new EventEmitter();
// fungsi yang akan dijalankan ketika event coffe-order terjadi
const makeCoffe = ({name}) =>{
    console.log(`Kopi ${name} telah dibuat!`);
   
}

const makeBill = ({price}) => {
    console.log(`harga ${price}`);
}

// Mendaftarkan fungsi makeCoffe sebagai listenerEvent coffe-order
myEventEmitter.on('coffe-order',makeBill);
myEventEmitter.on('coffe-order',makeCoffe);
// fungsi ON menerima 2 argument,
// 1. Nama event(aksi)
// 2. Listener atau fungsi yang dieksekusi ketika event terjadi.


// Bagaimana cara membangkitkan suatu event?
// Setiap instance dari EventEmitter juga memiliki fungsi emit(); yang berguna untuk membangkitkan event

// Memicu event 'coffe-order' terjadi
myEventEmitter.emit('coffe-order',{name: "Aceh", price: 15000});
// Fungsi emit() menerima nilai argument sebanyak apapun yang anda mau
// Namun nilai pertama merupakan nama dari event yang akan dibangkitkan 
// argument kedua dst adalah nilai yg akan digunakan untuk menjadi nilai dari parameter fungsi listener
