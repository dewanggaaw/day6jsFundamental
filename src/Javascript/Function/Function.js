console.log("hello function")


let ganjil=1
let genap=2

//function ganjil genap


console.log(inputUser)

function ganjilGenap(angka){
    if(angka % 2 === 0){
        console.log("Genap")
    } else{
        console.log("Ganjil")
    }
}
let inputUser = prompt("Masukin data: ")
ganjilGenap(inputUser)

//parameter, value yang dikirimkan dari luar function untuk dikelola oleh function tersebut (object)
function login(uName, pWord){
    console.log(uName.user, uName.pass, pWord)
}
login({user:"admin", pass:"password"}, "password")

//parameter, value yang dikirimkan dari luar function untuk dikelola oleh function tersebut (array)
function login(uName, pWord){
    console.log(uName.user, uName.pass, pWord `angka favoritku ${pWord[2]}`)
}
login({user:"admin", pass:"password"}, ["25", "20", "33"]) //output 33

//cara penulisan function
//1. Normal
function namaFungsi(){

}

//2. Anonymous Function, biasanya digunakan sebagai callback, atau parameter suatu function
let data = ["angga", "dhedy", "valin", "safitri", "andi"]

data.map(function(value, index){
    console.log(value, index, "dari function anonymous");
})

function callBackTrain(value, functions) {
//code
setTimeout(() =>{
    console.log(value);
}, 1000);
functions();
}

callBackTrain("nama anda", function(){
    console.log("ini callback")
});

//arrow function
const iniArrowFunction = () => {
    console.log("arrow function")
}
iniArrowFunction();

const someAction = nama => {
    console.log(nama)
}
someAction("hanna")

const someAction = (nama, umur) => {
    console.log(nama, umur)
}
someAction("hanna", "22")

const actt = nama2 => console.log(nama3)

//contoh penggunaan arrow, bikin variabel dulu untuk nangkep function
const ganGen = angka => angka % 2 ? console.log("ganjil") : console.log("genap");
const inputAngka = prompt("inputin:")
ganGen(inputAngka)

//gabungan declaration dan anonymous
const functionToSortNumber = function(){ //function() untuk ngasih tau kalau functionToSortNumber itu sebuah fungsi
    let data = [4,2,6,8,7]
    data.sort((value, compare) => value - compare)
    console.log(data)
}
functionToSortNumber()

//kesimpulan

// regular function baris 12
//anonymous