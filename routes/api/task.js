const express = require("express");
const asyncHandler = require("express-async-handler");
const {Task,Project,Organization} = require('../../db/models');
// const {Project} = require('../../db/models');


const router = express.Router();

// To get your tasks
router.get('/:id(\\d+)', asyncHandler( async(req,res)=>{
    // const {userId} = req.body;
    // const tasks = await Task.findAll({were:{userId:userId}});
    const userId = parseInt(req.params.id);
    console.log('Task get route');
    const tasks = await Task.findAll({where:{userId:userId}});
    const projects = await Project.findAll({where:{userId:userId}});
    const organization = await Organization.findAll({where:{userId:userId}})
    const data = { tasks:tasks, projects:projects, organization:organization};
    res.json(data);
}));

// To create your task
router.post('/', asyncHandler(async (req,res)=>{
    const {userId, description} = req.body;
    let newTask = await Task.create({userId:userId,projectId:1, description:description});
    res.json(newTask);
}))

// To delete your tasks
// ToDo set up propper id handling
router.delete('/', asyncHandler( async (req,res)=>{
    const {taskId} = req.body;
    await Task.destroy({where:{id:taskId}}); // place Holder.
    res.json({message: 'Sucess'});
}))

module.exports = router;
