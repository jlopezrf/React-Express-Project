const experiencesModel = require('./../models/experiencesModel')

const findAllExperiences = async () => {
    try {
        const experiences = await experiencesModel.find();
        return {experiences};    
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const findTopFiveExperiences = async () => {
    try {
        const top5 = await experiencesModel.find().sort({score:'desc'}).limit(5);
        return {top5};    
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const getDetailOfAExperience = async (id) => {
    try {
        const experience = await experiencesModel.findById(id);
        if(!experience) throw { status: 404, msg: 'Experience no found' }
        return {experience};    
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports = {
    findAllExperiences,
    findTopFiveExperiences,
    getDetailOfAExperience
}