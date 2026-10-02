const projectModel = require('../models/Project');

const getProjects = async(req,res) => {
    const projects = await projectModel.find();
    res.status(200).json({

    })
}
const createProject = async(req,res) => {
    
}
const updateProject = async(req,res) => {

}

module.exports = { getProjects, createProject, updateProject};