const UserModel = require('./models/UserModel');

class SequelizeRepository{
    async save(userData) {
        console.log('Dados enviados ao Sequelize:', userData); // debug útil
        return await UserModel.create(userData);
    }


    async findByEmail(email){
        return await UserModel.findOne({where:{email}});
    }

    async findById(id){
        return await UserModel.findByPk(id);
    }

    async update(id, updateData){
        return await UserModel.update(updateData,{where:{id}});
    }

    async delete(id){
        return await UserModel.destroy({where:{id}});
    }
}

module.exports= SequelizeRepository;