class dateHelper{
    constructor(data){
        this._data = data
    }
    get data(){
        return this.formataData()
    }
    formataData(){
        return this._data.split("-").reverse().join("/")
    }
}
