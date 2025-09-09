const jwt= reuire('jsonwebtoken');
const authConfig= require('src/config/auth');

const auThenticateToken =(req, res, next)=>{
    const authHeader= req.headers['authorization'];
    const token= authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({message:'No token provided'});
    }

    jwt.verify(token, authConfig.secret, (err, user)=>{
        if(err){
            return res.status(403).json({message: 'Invalid token'});
        }
        req.user= user;
        next();
    })
};

module.exports= auThenticateToken;