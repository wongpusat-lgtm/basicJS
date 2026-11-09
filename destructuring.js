// const siswa = {
//     nama: "Reihan",
//     umur: 17,
//     kelas: 7,
//     hobby: "Catur"
// };

// const {nama: namaSiswa, umur: umurSiswa, kelas: kelasSiswa, jurusan = "Belum ditentukan"} = siswa;
// console.log("Nama: " + namaSiswa);
// console.log("Umur: " + umurSiswa);
// console.log("Kelas: " + kelasSiswa);
// console.log("Jurusannya: " + jurusan);


// console.log (siswa);
// delete siswa.hobby;

// const warna = ["Merah", "Kuning", "Hijau"];

// const [warna1, warna2, warna3] = warna;
// console.log (warna1)

// const merekLaptop = ["Asus", "Lenovo", "Dell", "MSI", "Acer"];
// const [merek1, merek2, merek3, merek4, merek5] = merekLaptop;
// console.log (merek1);

const siswaBaru = [
    { nama: "Andi", nilai: 80, umur: 16, kelas: 8 },
    { nama: "Budi", nilai: 65, umur: 15, kelas: 8 },
    { nama: "Citra", nilai: 90, umur: 16, kelas: 7 },
    { nama: "Dina", nilai: 70, umur: 17, kelas: 9 },
    { nama: "Eko", nilai: 85, umur: 18, kelas: 10 }
];

// siswaBaru.forEach(({nama, nilai, umur, kelas}) => {
//     console.log("nama: " + nama, "nilai: " + nilai, "umur: " + umur, "kelas: " + kelas)
// });

// const namaSaja = siswaBaru.map((namaDoang) => namaDoang.nama);
// console.log(namaSaja);

// const umurSaja = siswaBaru.map((umurDoang) => umurDoang.umur);
// console.log(umurSaja)

// const daftarNama = siswaBaru.map(({nama, nilai}) => {
//     return {nama, nilai};
// });
// console.log(daftarNama)

const daftarHarga = [
    { nama: "Asus", harga: 14000000, kondisi: "Baru" },
    { nama: "Lenovo", harga: 16000000, kondisi: "Bekas" },
    { nama: "MSI", harga: 22000000, kondisi: "Baru" },
];

const daftarLaptop = daftarHarga.map(({nama, harga}) => {
    return {nama, harga};
});
console.log(daftarHarga)