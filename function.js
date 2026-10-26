// function belajar(materi) {
//     console.log("Belajar" + " " + materi);
// }

// function salam(nama) {
//     console.log("Assalamu'alaikum" + " " + nama);
// }

// belajar("HTML");
// belajar("CSS");
// belajar("JavaScript");

// function angka(a, b, c) {
//     console.log(a * b / c);
// }

// angka(60, 30, 2);  

// function angka(a, b, c) {
//     console.log(a * b / c);
// }

// angka(70, 20, 10);

// function angka(a, b, c) {
//     console.log(a * b / c);
// }

// angka(2 ** 8, 1, 2);

// function hitungTotal(harga, jumlah) {
//     console.log(`Harga Apel perbuah: $(harga), Jumalh: $(jumlah)`);
//     return harga * jumlah;
// }

// let total = hitungTotal(10000, 3);
// let diskon = 5000;
// let bayar = total - diskon;

// console.log("Diskon = " + diskon);
// console.log("Harga bayar = " + bayar);

function hitungLuasLingkaran(jariJari) {
    let luas = 3.14 * jariJari * jariJari;
    return luas;
}
function hitungKelilingLingkaran(jariJari) {
    let keliling = 2 * 3.14 * jariJari;
    return keliling;
}

let jariJari = 7;
let luas = hitungLuasLingkaran(jariJari);
let keliling = hitungKelilingLingkaran(jariJari);

console.log("Luas Lingkaran = " + luas);
console.log("Keliling Lingkaran = " + hitungKelilingLingkaran(jariJari));
