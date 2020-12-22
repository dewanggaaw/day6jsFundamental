// var, mendeklarasi variabel secara global, dan bisa dirubah valuenya, sudah mulai ditinggalkan sejak ES6
// cara memberi nama pada variabel, disarankan menggunakan camel case, ex: iniVariabel
var a = "one ok rock"
console.log(a)
a="changed"
console.log(a)

// let, mendeklarasi variabel namun dengan sistem blocking, dan value bisa dirubah
let b = "japanese rock-band"
console.log(b)
b = "changed too"
console.log(b)


// const, mendeklarasi variabel namun dengan sistem blocking, dan value tidak bisa dirubah
const c = "best songs"

console.log(hero) //bakal error karena belum di deklarasi
let hero = "Iron Man"
console.log(hero)


//sistem blocking
function checkVara(){
    var a = "terubah"
    console.log(a)
}

checkVara();