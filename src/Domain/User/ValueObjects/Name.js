class Name{
    constructor(value){
        if(!value || value.trim().Length ===0){
            throw new Error("Name cannot be empty.");
        }
        this.value=value.trim();
    }
}

module.exports= Name;