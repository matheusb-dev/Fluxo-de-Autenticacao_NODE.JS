const express= require('express');
const cors= require('cors');
const morgan= require('morgan');
const swaggerUi=require('swagger-ui-express');
const yaml=require('js-yaml');
require('module-alias/register');
const fs = require('fs');

const errorHandler= require('./Infrastructure/Express/middlewares/errorHandler');
const SequelizeUserRepository= require('./Infrastructure/Persistence/Sequelize/SequelizeRepository');
const RedisTokenBlackListRepository = require('./Infrastructure/Persistence/Redis/RedisTokenBlackListRepository.js');
const JWTProvider= require('./Infrastructure/Providers/JWTProvider');
const authRoutes= require('./Infrastructure/Express/routes/auth.routes');

const RegisterUser= require('./Application/UseCases/Auth/RegisterUser');
const LoginUser= require('./Application/UseCases/Auth/LoginUser');

const app= express();

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

const userRepository =new SequelizeUserRepository();
const tokenBlacklistRepository = new RedisTokenBlackListRepository();

const jwtProvider= new JWTProvider();

const registerUserUseCase= new RegisterUser(userRepository);
const loginUserUseCase = new LoginUser(userRepository, jwtProvider);

app.use('/auth', authRoutes(registerUserUseCase, loginUserUseCase));

try{
    const swaggerDocument= yaml.load(fs.readFileSync('./docs/swagger.yml', 'utf8'));

    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
} catch (e){
    console.error('Failed to load Swagger.yml file:',e);
}

app.get('/', (req, res) => {
  res.send('API está rodando! Confira a documentação em /api-docs');
});


app.use(errorHandler);

module.exports=app;