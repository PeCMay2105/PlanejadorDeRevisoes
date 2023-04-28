function formataData(data){
    return data.split("-").reverse().join("/")
}

console.log(formataData("2023-02-01"))