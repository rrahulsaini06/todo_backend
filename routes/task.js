const express = require("express");
const router = express.Router();
 

router.get("/", async function (req, res) {
  try {
    let collection = await db.collection("tasks");
    let tasksData = await collection.find({}).toArray();
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
    let collection = db.collection("tasks");
    let ress = await collection.insertOne(newTask);
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
    let tasksCollection = await db.collection("tasks");
    let taskData = await tasksCollection.deleteOne({
      taskID: req.params.taskId,
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
    let tasksCollection = await db.collection("tasks");
    let  taskData = await tasksCollection.findOne({taskID : req.params.id}) ;
    
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
    let tasksCollection = await db.collection("tasks");
    let taskData = await tasksCollection.updateOne(
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