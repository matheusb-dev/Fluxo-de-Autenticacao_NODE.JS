const User = require('src/Domain/User/User');
const UserOutput= require('src/Application/DTOs/UserOutput');
const UserAlreadyExistsException= require('src/Domain/Exceptions/UserAlreadyExistsException');

class RegisterUser{
    constructor(userRepository){
        this.userRepository= userRepository;
    }

    async execute(input){
        const existingUser= await this.userRepository.findByEmail(input.email);
        if(existingUser){
            throw new UserAlreadyExistsException('User with this email already exist');
        }

        const user= new User(input.name, input.email, input.password);

        const userData= user.toObject();

        await this.userRepository.save(userData);

        return new UserOutput(user);
    }
}

module.exports = RegisterUser;