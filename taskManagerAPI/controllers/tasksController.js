const Task = require('./../models/tasksModel');
const asyncHandler = require('express-async-handler');

exports.getAllTasks = asyncHandler(async(req,res) =>{
    const tasks = await Task.find({});
    res.status(200).json({
        tasks
    })
})

exports.createTask = asyncHandler(async(req,res) =>{
    console.log(req.body)
    const {name , completed} = req.body;
    if(!name){
        res.status(400);
        throw new Error("Name is required");
    }
    const task = await Task.create(req.body);
    res.status(201).json(task);
})

exports.getTask = asyncHandler(async(req,res) =>{
    const task = await Task.findById(req.params.id);
    if(!task){
        res.status(404);
        throw new Error("Task not found");
    }
    res.json({
        message: `Got the task with id: ${req.params.id}`,
        task,
    })
})

exports.deleteTask = asyncHandler(async(req,res) =>{
    const task = await Task.findById(req.params.id);
    if(!task){
        res.status(404);
        throw new Error("Task not found");
    }
    await Task.findByIdAndDelete(req.params.id);
    res.json({
        message: `Task deleted with id: ${req.params.id}`,
        task
    })
})

exports.updateTask = asyncHandler(async(req,res) =>{
    const task = await Task.findById(req.params.id);
    if(!task){
        res.status(404);
        throw new Error("Task not found");
    }
    const newTask = await Task.findByIdAndUpdate(req.params.id, req.body , {new: true, runValidators: true})
    console.log(newTask);
    res.json({
        message: `Task updated with id: ${req.params.id}`,
        newTask
    })
})