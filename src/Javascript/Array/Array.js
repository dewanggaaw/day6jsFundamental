console.log("hello array")

// const data = ["angga" ,"dhedy", "valin", "safitri", "andi"]

// console.log("apakah nama anda ", data[3], "?")

//array object
const data1 = [{
    nama: "safitri",
    gender: "wanita"
},{
    nama: "valin",
    gender: "wanita"
},{
    nama: "vania",
    gender: "wanita"
},[
    {
    nama: "dheddy",
    gender: "unknown"
    },{
        nama: "bram",
    gender: "pria"
    },{
        nama: "sofyan",
    status: "lajang"
    }
]
]
//nama valin
console.log(data1[1].nama)

//status sofyan
console.log(data1[3][2].status)//ngambil data terakhir

const dataTerakhir = data1.length
console.log(data1[dataTerakhir - 1][1].status)

