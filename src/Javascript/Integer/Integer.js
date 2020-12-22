//tipe data number

//operator
let angkaPertama = 77
let angkaKedua = 26

//penjumlahan
console.log(angkaKedua+angkaPertama)

//pengurangan
console.log(angkaPertama-angkaKedua)

//kali

//bagi

//increment

//exponential (pangkat)
const hasilPangkat = angkaPertama ** angkaKedua;
console.log(hasilPangkat);

//modulus(sisa pembagian)
const hasilMod = 8%3
console.log(hasilMod)

//train modulus
const angkaMod = prompt("Masukkan angka: ");
function modTrain(){
    if(angkaMod % 2 === 0){
        console.log("genap");
    }else{
        console.log("ganjil")
    }
}
modTrain();

//increment
let incNumb = 0
incNumb++;
console.log(incNumb)

//decrement
let decNumb = 10
decNumb--;
console.log(decNumb)

//+=assignment
let newNumb = 10;
newNumb = newNumb + 5;
newNumb += 5;

//comparison == dan ===, == cuman dilihat value, === dilihat tipe data juga

//ternary ?
cons ternOpt = newNumb < 20 ? "true" : "false"; //apakah newNumb kurang dari 20?
console.log(ternOpt)