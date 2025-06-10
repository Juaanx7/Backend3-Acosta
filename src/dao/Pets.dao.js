import petModel from "./models/Pet.js";

export default class Pet {

    get = (params) =>{
        return petModel.find(params)
    }

    getBy = (params) =>{
        return petModel.findOne(params);
    }

    save = (doc) =>{
        return petModel.create(doc);
    }

    update = (id,doc) =>{
        return petModel.findByIdAndUpdate(id,{$set:doc})
    }

    delete = (id) =>{
        return petModel.findByIdAndDelete(id);
    }

    getAdoptedPets = () => {
        return petModel.find({ adopted: true });
    }
    markAsAdopted = async (petId) => {
        return await petModel.findByIdAndUpdate(petId, { adopted: true }, { new: true });
    };
    getById = (id) => {
        return petModel.findById(id);
    }

}