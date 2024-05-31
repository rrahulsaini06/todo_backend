const mongoose = require("mongoose")
const taskSchema = new mongoose.Schema({
    "taskIdea": {type: String , required: true, },
    "taskId": {type: Number , required: true, unique: true },
    "taskDes" : {type: String , required: true, },
   
})
const TaskModel = mongoose.model("tasks" , taskSchema)
module.exports = TaskModel;