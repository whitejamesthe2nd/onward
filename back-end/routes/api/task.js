const { Router } = require("express");
const express = require("express");
const asyncHandler = require("express-async-handler");
const Task = require('../');

const router = express.router()

// To get your tasks
router.get('/', asyncHandler( async(req,res)=>{
    const {userId} = req.body;
    const tasks = await Task.findAll({were:{userId:userId}});
    res.json(tasks);
}));

// To create your task
router.post('/', asyncHandler(async (req,res)=>{
    const {userId, description} = req.body;
    let newTask = await Task.create({userId, description});
    res.json(newTask);
}))

// To delete your tasks
router.delete('/', asyncHandler( async (req,res)=>{
    const {taskId} = req.body;
    await Task.delete({where:{taskId}}); // place Holder.
}))
