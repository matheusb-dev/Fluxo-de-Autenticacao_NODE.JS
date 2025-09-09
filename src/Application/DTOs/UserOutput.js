class UserOutput{
    constructor(user){
        this.id= user.id;
        this.name=user.name;
        this.email=user.email;
        this.password=user.password;
    }
}

module.exports= UserOutput;