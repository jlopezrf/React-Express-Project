const experiencesRepository = require('./../repository/data')
const EXPERIENCES = experiencesRepository.EXPERIENCES;

const findAllExperiences = () => {
    return {experiences: EXPERIENCES};
}

const findTopFiveExperiences = () => {
    const orderedArray = EXPERIENCES.sort((el1, el2) => {return el2.score - el1.score });
    const data = orderedArray.slice(0,5);
    return {data};
}

const getDetailOfAExperience = (id) => {
    const experience = EXPERIENCES.find(el => Number(id) === el.id);
    if(experience === undefined) throw ('There is not a experience with this id')
    return { experience };
}

module.exports = {
    findAllExperiences,
    findTopFiveExperiences,
    getDetailOfAExperience
}