// Salah satu global object yang penting untuk diketahui adalah process
// Dalam ilmu komputer, process adalah sebuah program yang dijalankan pada satu atau lebih thread
// thread (sekumpulan perintah yang dilaksanakan sejajar dengan proses lainnya)

// bisa melihat proses yang berjalan melalui task manager 
// Pada node.js Global object process memiliki fungsi dan property yang dapat memberikan informasi mengenai proses yang sedang berjalan

// Salah satu yang sering digunakan adalah property process.env
// melalui property dapat menyimpan nilai atau mendapatkan informasi mengenai environtment yang digunakan selama proses sedang berlangung

// Contoh, process.env memiliki property process.env.pwd 
// Yang menyediakan informasi mengenai lokasi dimana proses dijalankan
// Property process.env.USER menyimpan informasi nama user pada komputer anda
// dan masih banyak lagi property lainnya bisa di lihat pada dokumentasi Node.js Mengenai Process.env

// Bisa juga secara manual menyimpan nilai didalam process.env
// hal ini berguna untuk menentukan alur code seperti if-else dalam program berdasarkan environtment yang anda berikan

// Contoh: Ketika anda ingin nilai variable host berbeda dikala pengembangan (development) dan produksi (production)
// Anda bisa membuat property NODE_ENV pada Process.ENV
// Anda bisa menentukan nilai Host berdasarkan kondisi NODE_ENV

// Objek process juga dapat  digunakan untuk mendapatkan informasi CPU ketika process berjalan
// const cpuInformation = process.memoryUsage();
// console.log(cpuInformation);

// Property process.argv
// Property ini dapat menampung nilai baris perintah dalam bentuk array ketika menjalankan proses

// Contoh :
// Ketika menjalankan program ini
// node app.js harry potter
// Element pertama, alamat (path) lengkap dari lokasi node yang menjalankan prosesnya
// const index1 = process.argv[1];
// Element kedua, Bayu
// const index2 = process.argv[2];
// const index3 = process.argv[3];
// console.log([index2,index3]);


// Latihan 

const initialMemoryUsage = new process.memoryUsage().heapUsed;
const yourName = process.argv[2];
const environment = process.env.NODE_ENV;


for(let i=0; i < 10000; i++) {
    // Process ini akan membuat penggunaan memory naik
}

const currentMemoryUsage = new process.memoryUsage().heapUsed;
console.log(`Hai, ${yourName}`);
console.log(`Mode environment: ${environment}`)
console.log(`Penggunaan memori dari ${initialMemoryUsage} naik ke ${currentMemoryUsage}`);