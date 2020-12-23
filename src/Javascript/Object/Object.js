console.log("hello object")

const data={
    nilai:[50,60,70,80],
    status :"lulus",
    nama:"taka"
}
console.log(data.nilai[0],data.nilai[1],data.nilai[2],data.nilai[3], data.status, data.nama)

//manggil semua data
console.log(...data.nilai, data.status, data.nama)