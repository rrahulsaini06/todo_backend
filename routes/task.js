const express = require("express");
const router = express.Router();
const TaskModel=  require("../models/taskModel")
 

router.get("/", async function (req, res) {
  try {
    // let collection = await db.collection("tasks");
    let tasksData = await TaskModel.find();
    res.statusCode = 200;
    res.send({
      success: true,
      data: tasksData,
    });
  } catch (error) {
    res.statusCode = 500;
    res.send({ success: false, message: error?.message });
  }
});

router.post("/create", async function (req, res) {
  try {
    // throw new Error("this is custom generated error")
     let newTask = req.body;
     const task = new TaskModel(newTask);
    // let collection = db.collection("tasks");

    let ress = await task.save();
    res.statusCode = 200;
    res.send({
      success: true,
      data: ress,
    });
  } catch (error) {
    res.statusCode = 500;
    res.send({ success: false, message: error?.message });
    // console.log(error);
  }
});

router.delete("/delete/:taskId", async function (req, res) {
  try {
    // let tasksCollection = await db.collection("tasks");
    let taskData = await TaskModel.deleteOne({
      taskId: req.params.taskId,
    });
    res.statusCode = 200;
    res.send({
      success: true,
      data: taskData,
    });
  } catch (error) {
    res.statusCode = 500;
    res.send({ success: false, message: error?.message });
  }
});

router.get("/:id", async function (req, res) {
  try {
    // let tasksCollection = await db.collection("tasks");
    let  taskData = await TaskModel.findOne({taskId : req.params.id}) ;
    
    res.statusCode = 200;
    res.send({
      success: true,
      data: taskData,
    });
  } catch (error) {
    res.statusCode = 500;
    res.send({ success: false, message: error?.message });
  }
});

router.put("/update/:taskId", async function (req, res) {
  try {
    let taskInfo = req.body;
    // let tasksCollection = await db.collection("tasks");
    let taskData = await TaskModel.updateOne(
      { taskID: req.params.taskId },
      { $set: taskInfo }
    );
    res.statusCode = 200;
    res.send({
      success: true,
      data: taskData,
    });
  } catch (error) {
    res.statusCode = 500;
    res.send({ success: false, message: error?.message });
  }
});


module.exports = router;