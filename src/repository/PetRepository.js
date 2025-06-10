import GenericRepository from "./GenericRepository.js";

export default class PetRepository extends GenericRepository {
    constructor(dao) {
        super(dao);
    }
    getAdoptedPets = () => {
        return this.dao.getAdoptedPets();
    }
    markAsAdopted = (petId) => {
        return this.dao.markAsAdopted(petId);
    };
    getById(id) {
        return this.dao.getById(id);
    }
}