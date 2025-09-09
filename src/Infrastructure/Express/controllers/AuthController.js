const RegisterUserInput = require('src/Application/DTOs/RegisterUserInput');
const LoginUserInput= require('src/Application/DTOs/LoginUserInput');
const RedisTokenBlackListRepository= require('src/Infrastructure/Persistence/Redis/RedisTokenBlackListRepository');
const redisTokenBlackListRepository=new RedisTokenBlackListRepository();
class AuthController{
    constructor(registerUserUseCase, LoginUserUseCase){
        this.registerUserUseCase= registerUserUseCase;
        this.LoginUserUseCase= LoginUserUseCase;
    }

    async register(req, res, next){
        try{
            const{name, email, password}=req.body;
            
            if (!name?.trim() || !email?.trim() || !password?.trim()) {
                return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
            }

            const input= new RegisterUserInput(name, email, password);
            const UserOutput= await this.registerUserUseCase.execute(input);
            return res.status(201).json(UserOutput);
        }catch(error){
            next(error);
        }
    }

    async login(req, res, next){
        try{
            const{email,password}=req.body;
            const input= new LoginUserInput(email,password);
            const authOutput= await this.LoginUserUseCase.execute(input);
            return res.status(200).json(authOutput);
        }catch(error){
            next(error);
        }       
    }

    async logout(req, res, next){
        try{
            const token= req.headers.authorization?.split('')[1];
            if(token){
                return res.status(400).json({message:'Token not provided'});
            }
            const expirationDate= Date.now()+60*60*1000;
            await redisTokenBlackListRepository.add(token, expirationDate);
            return res.status(200).json({message:'Sucessfully logout'})
        }catch(error){
            next(error);
        }
        
    }
}

module.exports= AuthController;