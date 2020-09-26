require('./../connection/MongoConnection')

const experiencesModel = require('./../models/experiencesModel');
const initialDataExperiences = require('./../repository/data');

const populateExperiences = () => {
    try {
        initialDataExperiences.EXPERIENCES.map(async el => {
            await experiencesModel(el).save();
        });
    } catch (error) {
        console.error('Error populating the Experiences Model', error);
    }
};

populateExperiences();

