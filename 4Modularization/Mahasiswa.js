class Mahasiswa  {

    constructor(Name, NIM, Jurusan) {
        this.Name = Name;
        this.NIM = NIM;
        this.Jurusan = Jurusan;
    }

absen() {
    return `Nama ${this.Name}, ${this.NIM}, ${this.Jurusan}`;
}


}

module.exports = Mahasiswa;