// const nama = "Andi";
// console.log(nama.toUpperCase());
// console.log(nama.toLowerCase());

// const username = "AnDi";
// const usernameBaru = username.toLowerCase();
// console.log(usernameBaru);

// const nama = "Andi";
// console.log(nama);
// console.log(nama.trim());

// const email = "andi@gmail.com";
// console.log(email.includes("@"));

// const nama = "Andi";
// console.log(nama.includes("di"));
// console.log(nama.includes("xyz"));


// const email = "andi@gmail.com";
// if (email.includes("@")) {
//     console.log("email valid");
// } else{
//     console.log("Email tidak valid");
// }

// const kode = "PC-001";
// console.log(kode.startsWith("PC"));

// const kode = "LT-001";
// if (kode.startsWith("LT")) {
//     console.log("Barangnya Komputer");
// } else {
//     console.log("Barangnya bukan komputer");
// }

// const file = "laporan.docx";
// if (file.endsWith("pdf")) {
//     console.log("File adalah PDF");
// } else if (file.endsWith("jpg")) {
//     console.log("File adalah JPG");
// } else if (file.endsWith("docx")) {
//     console.log("File adalah Word");
// } else {
//     console.log("File tidak didefinisikan");
// }

// const nama = "Andi";
// if (nama.indexOf("o") !== -1) {
//     console.log("Huruf ditemukan");
// } else {
//     console.log("Huruf tidak ditemukan");
// }
// console.log(nama.indexOf("i"), nama.indexOf("A"));
// console.log(nama.indexOf("o"));

// const numby = 2;
// if (numby %2 === 0) {
//     console.log("Angka genap");
// } else {
//     console.log("Angka ganjil");
// }

// const nama = "Andi";
// console.log(nama.slice(0, 2));

// const namaBarang = "PC-001";
// console.log(namaBarang.slice(3, 6));

// const kalimat = "Saya belajar Java";
// const hasil = kalimat.replace (
//     "Saya", "JavaScript"
// );
// console.log(hasil);

// const kalimat = "Saya belajar JavaScript";
// const hasil2 = kalimat.replace (
//     "Saya", "Aku"
// );
// console.log (hasil2)

// const nama = "Andi Budi Citra";
// const hasil = nama.split(" ");
// console.log(hasil)

// const kalimat = "Kulo sinau JavaScript";
// const kata = kalimat.split(" ");
// console.log(kata)

// const warna = "Merah - Kuning - Hijau";
// const hasilWerno = warna.split(" - ");
// console.log(hasilWerno)

// const namaKelompok = ["Andi", "Budi", "Citra"];
// const joinKelompok = namaKelompok.join(", ");

// console.log(joinKelompok);

// const kasus1 = "Aku suka renang";
// const kasus2 = kasus1.replace(
//     "Aku", "Saya"
// );
// const kasus3 = kasus2.replace(
//     "renang", "berenang"
// );
// const kasus4 = kasus3.split(" ");
// console.log(kasus4);

// const username = " AdMiN123";
// const hasil = username
// .trim()
// .toLowerCase();

// console.log(hasil);

// const emailAndi = " ANDI@GMAIl.COM";
// const emailAndiBaru = emailAndi.trim().toLowerCase();
// console.log(emailAndiBaru);

// LATIHAN SOAL 1
// const siswa = {
//     nama: " aNdI",
//     kelas: "x ict",
//     email: " ANDI@GMAIL.COM"
// };

// console.log()


// LATIHAN SOAL 2
const siswa = [
    { nama: "Andi", email: "andi@gmail.com", umur: 17 },
    { nama: "Budi", email: "budi@gmail.com", umur: 17 },
    { nama: "Citra", email: "citra@gmail.com", umur: 17 }
];

const sisaTicket = warTicket.filter((ticket) => {
    return ticket.jumlah - ticket.dipesan <= 30;
});