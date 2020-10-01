const express = require("express");
const asyncHandler = require("express-async-handler");
const {Task} = require('../../db/models');

const router = express.Router();

// To get your tasks
router.get('/', asyncHandler( async(req,res)=>{
    const {userId} = req.body;
    const tasks = await Task.findAll({were:{userId:userId}});
    res.json(tasks);
}));

// To create your task
router.post('/', asyncHandler(async (req,res)=>{
    const {userId, projectId, description} = req.body;
    let newTask = await Task.create({userId:userId,projectId:projectId, description:description});
    res.json(newTask);
}))

// To delete your tasks
// ToDo set up propper id handling
router.delete('/:id', asyncHandler( async (req,res)=>{
    const {taskId} = req.body;
    await Task.delete({where:{id:taskId}}); // place Holder.
    res.json({message: 'Sucess'});
}))

module.exports = router;