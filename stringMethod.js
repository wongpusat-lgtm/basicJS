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
//     nama: "aNdI",
//     kelas: "x ict",
//     email: " ANDI@GMAIL.COM "
// };
// const {nama, kelas, email} = siswa;
// const namaBaru = nama.trim().toUpperCase();
// const kelasBaru = kelas.trim().toUpperCase();
// const emailBaru = email.trim().toLowerCase();

// console.log("Name:", namaBaru);
// console.log("Class:", kelasBaru);
// console.log("Email:", emailBaru);

// LATIHAN SOAL 2
// const siswa = [
//     { nama: "Andi", email: "andi@gmail.com", umur: 17 },
//     { nama: "Budi", email: "budi@gmail.com", umur: 17 },
//     { nama: "Citra", email: "citra@gmail.com", umur: 17 }
// ];
// const siswaBaru = siswa.filter((siswaa) =>  {
//     const endsWith = siswaa.email.trim().toLocaleLowerCase().endsWith("@gmail.com");
//     return endsWith;
// })
// .map((siswaa) => {
//     return {
//        nama: siswaa.nama,
//        email: siswaa.email
//     };
//   });

// console.log(siswaBaru);

// const sa = [
//     { nama: "Dzaki", umur: 26 },
//     { nama: "Zulfi", umur: 21 },
//     { nama: "Fahry", umur: 24 },
// ];

// console.log(sa[0].nama, sa[2].umur);

const barang = [
    {
        kode: " KB-001 ",
        nama: " Keyboard mechanical ",
        harga: 450000
    },
    {
        kode: " MS-002 ",
        nama: " Mouse gaming ",
        harga: 250000
    },
    {
        kode: " HS-003 ",
        nama: " Headset ",
        harga: 350000
    },
    {
        kode: " WC-004 ",
        nama: " Webcam ",
        harga: 300000
    }
];

let dis = 0.1
let beli = 7
let  i = 1

let maxPrint=1
if (beli >= 5){
    for (x=0; x<maxPrint; x++){
        barang[i].harga = barang[i].harga * pem* dis
        console.log(barang[i])
    }
};