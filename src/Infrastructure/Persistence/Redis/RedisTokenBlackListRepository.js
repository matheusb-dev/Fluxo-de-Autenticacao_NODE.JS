const {redisClient}=require('./RedisClient');
const ITokenBlackListRepository = require('src/Domain/Repositories/ITokenBlackListRepository');

class RedisTokenBlackListRepository extends ITokenBlackListRepository{
    async add(token, expirationDate){
        const ttlInSeconds = Math.floor((expirationDate - Date.now()))/1000;
        await redisClient.set(`blacklist:${token}`,'true',{
            EX: ttlInSeconds
        });
    }

    async exists(token){
        const result = await redisClient.get(`blacklist:${token}`);
        return result !== null;
    }
}

module.exports=RedisTokenBlackListRepository;