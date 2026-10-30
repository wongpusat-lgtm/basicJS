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

const arrayAngka = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const angkaGenap = arrayAngka.filter((angka) => {
    return angka % 2 === 0;
});
console.log(angkaGenap);

const angkaGanjil = arrayAngka.filter((angka) => {
    return angka % 2 !== 0;
});
console.log(angkaGanjil);