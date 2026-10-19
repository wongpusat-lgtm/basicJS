// console.log("Nama saya Rifat");
// console.log("Nama saya Rifat");
// // console.log("Nama saya Rifat");
// // console.log("Nama saya Rifat");
// // console.log("Nama saya Rifat");

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

let nilai = [80, 90, 70, 90, 50, 100, 30, 200, 10];
for (let i = 0; i < nilai.length; i++) {
    if (nilai[i] >= 90) {
        console.log("nilainya", `${nilai[i]} - sangat bagus`);
    } else if (nilai[i] >= 80) {
        console.log("nilainya", `${nilai[i]} - bagus`);
    } else {
        console.log("nilainya", `${nilai[i]} - cukup`);
    }