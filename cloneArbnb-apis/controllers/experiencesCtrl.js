const bussinesLogicExperiences = require('./../bussinesLogic/experiencesBL');

const all = async (req, res) => {
    try {
        const response = await bussinesLogicExperiences.findAllExperiences(); 
        res.json(response);   
    } catch (error) {
        res.status(500).send(error);
    }
}

const top5 = async (req, res) => {
    try {
        const response = await bussinesLogicExperiences.findTopFiveExperiences(); 
        res.json(response);   
    } catch (error) {
        res.status(500).send(error);
    }
}

const detail = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await bussinesLogicExperiences.getDetailOfAExperience(id); 
        res.json(response);
    } catch (error) {
        res.status(error.status).send(error.msg);
    }
    
}

module.exports = {
    all,
    top5,
    detail
}
