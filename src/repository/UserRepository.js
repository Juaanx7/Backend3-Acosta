import GenericRepository from "./GenericRepository.js";

export default class UserRepository extends GenericRepository{
    constructor(dao){
        super(dao);
    }
    
    getUserByEmail = (email) =>{
        return this.getBy({email});
    }
    getUserById = (id) =>{
        return this.getBy({_id:id})
    }
    getUsersByRole = async (role) => {
    return await this.dao.getUsersByRole(role);
    }
    getUsersWithPets = () => {
        return this.dao.getUsersWithPets();
    }
}