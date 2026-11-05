// const nilai = [80, 75, 90, 85, 70, 56, 78, 50, 25, 30, 40];
// nilai.forEach((angka) => {
//     console.log(angka);   
// });

// nilai.forEach((angka) => {
//     if (angka >= 75) {
//         console.log(angka +" - Lulus");
//     } else {
//         console.log(angka + " - Remidial");
//     }
// });

// const baru = ["Bima", "Tomi", "Lukman", "Dizzy", "Nepnap PKL", "Arif", "Dapa", "Den", "Adit", "Aditia"];
// baru.forEach((nama) => {
//     console.log ("Hello " + nama);
// })

// const nilai = [80, 75, 90, 85, 70, 56, 78, 50, 25, 30, 40];

// nilai.forEach((angka) => {
//     console.log(angka + 5);
// });

// nilai.forEach((angka) => {
//     if(angka >= 75) {
//         console.log("Nilai-nya = ", angka + 5,  " - Lulus");
//     } else {
//         console.log("Nilai-nya = ",  angka + 5, " - Remedial");
//     }
// });

// const siswa = [
//     { nama: "Dizzy", alamat: "Jogja", umur: 19, kelas: "Menengah-atas" },
//     { nama: "Bima", alamat: "Lampung", umur: 18, kelas: "Menengah-atas" },
//     { nama: "Lukman", alamat: "Semarang", umur: 16, kelas: "Menengah-atas" }
// ];

// const namaSaja = siswa.map((namaDoang) => namaDoang.nama);
// console.log(namaSaja);
// const umurSaja = siswa.map((umurDoang) => umurDoang.umur);
// console.log(umurSaja);

// const nilaiBaru = [80, 65, 90, 70, 65, 80, 60, 45, 35, 78, 75, 76];
// const nilaiTidaklulus = nilaiBaru.filter((angka) => {
//     return angka >= 80;
// });
// console.log(nilaiTidaklulus);

// const arrayAngka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// const angkaGenap = arrayAngka.filter((angka) => {
//     return angka % 2 === 0;
// });
// console.log(angkaGenap);

// const angkaGanjil = arrayAngka.filter((angka) => {
//     return angka % 2 !== 0;
// });
// console.log(angkaGanjil);

// const warTicket = [
//     {nama: "Konser", harga: 300, dipesan: 200},
//     {nama: "Seminar", harga: 100, dipesan: 70},
//     {nama: "Workshop", harga: 80, dipesan: 80}
// ];

// const sisaTicket = warTicket.filter((ticket) => {
//     return ticket.jumlah - ticket.dipesan <= 30;
// });
// console.log(sisaTicket);

const produk = [
    { nama: "Mouse", harga: 100000},
    { nama: "Keyboard", harga: 150000},
    { nama: "Headset", harga: 200000},
    { nama: "Flashdisk", harga: 50000},
    { nama: "Webcam", harga: 250000}
];

const hargaPromo = produk.map((p) => {
return {nama: p.nama, harga: p.harga - (p.harga * 0.1)};
});
console.log(hargaPromo)

const calonAnggota = [
    { nama: "Andi", nilai: 85,kehadiran: 90 },
    { nama: "Budi", nilai: 75,kehadiran: 95 },
    { nama: "Citra", nilai: 90,kehadiran: 85 },
    { nama: "Dina", nilai: 80,kehadiran: 70 },
    { nama: "Eko", nilai: 88,kehadiran: 100 },
    { nama: "Fajar", nilai: 70,kehadiran: 75 }
];

const anggotaTerpilih = calonAnggota.filter((c) => {
    return c.nilai >= 80 && c.kehadiran >= 80;
});

// anggotaTerpilih.forEach((c) => {
//     console.log(c.nama);
// });
// console.log(anggotaTerpilih.length);

const inventaris = [
    { kode: "PC001", nama: "Komputer 1", kondisi: "Baik" },
    { kode: "PC002", nama: "Komputer 2", kondisi: "Rusak" },
    { kode: "PC003", nama: "Komputer 3", kondisi: "Baik" },
    { kode: "PC004", nama: "Komputer 4", kondisi: "Perbaikan" },
    { kode: "PC005", nama: "Komputer 5", kondisi: "Baik" }
];

const hasilCari = inventaris.find((item) => {
    return item.kode === "PC002";
});

if (hasilCari) {
    console.log("Nama perangkat: " + hasilCari.nama);
    console.log("Kondisi: " + hasilCari.kondisi);
} else {
    console.log("Perangkat tidak ditemukan");
}