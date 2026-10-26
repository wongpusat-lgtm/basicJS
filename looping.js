// console.log("Nama saya Rifat");
// console.log("Nama saya Rifat");
// console.log("Nama saya Rifat");
// console.log("Nama saya Rifat");
// console.log("Nama saya Rifat");

// let total = 0;
// for (let i = 10; i <= 20; i++) {
//     total = total + i;
//     console.log(`i = ${i} -> total = ${total}`);
//     console.log(`total = ${total}`) //15
// }

// console.log (total);

// let nama = ["Fajar", "Daffa", "Apit", "Nepnap", "Bima", "Lukman", "Nepnap", "Valen", "Ahnaf", "Adit"];
// for (let i = 0; i < 1; i++) {
//     console.log(`${i + 1}. ${nama[i]}`);
// }

// let nilai = [80, 90, 70, 90, 50, 100, 30, 200, 10];
// for (let i = 0; i < nilai.length; i++) {
//     if (nilai[i] >= 90) {
//         console.log("nilainya", `${nilai[i]} - sangat bagus`);
//     } else if (nilai[i] >= 80) {
//         console.log("nilainya", `${nilai[i]} - bagus`);
//     } else {
//         console.log("nilainya", `${nilai[i]} - cukup`);
//     }
// }

// let angka = [12, 7, 20, 15, 8, 3, 14, 9];

// for (let i = 0; i < angka.length; i++) {


//     if (angka[i] % 2 === 0 && angka[i] < 10) {
//         console.log(angka[i] + " - Genap - < 10");
//     } else if (angka[i] % 2 === 1 && angka[i] <= 10) {
//         console.log(angka[i] + " - Ganjil - < 10");
//     } else if (angka[i] % 2 === 0 && angka[i] >= 10) {
//         console.log(angka[i] + " - Genap - >= 10");
//     } else  {
//         console.log(angka[i] + " - Ganjil - >= 10");
//     } 
// }

// function hitungLuasLingkaran(jariJari) {
//     let luas = 3.14 * jariJari * jariJari;
//     return luas;
// }

// function hitungKelilingLingkaran(jariJari) {
//     let keliling = 2 * 3.14 * jariJari;
//     return keliling;
// }

// let jariJari = 7;
// let luas = hitungLuasLingkaran(jariJari);
// let keliling = hitungKelilingLingkaran(jariJari);

// console.log("Luas Lingkaran = " + luas);
// console.log("Keliling Lingkaran = " + hitungKelilingLingkaran(jariJari));

function hitungVolumeBalok(p, l, t) {
    let volume = p * l * t;
    return volume;
}

let volumeBalok = hitungVolumeBalok(17, 5, 10);

console.log("Volume Balok = " + volumeBalok);