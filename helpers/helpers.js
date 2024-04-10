   
const users = require("../data/users.json");
const tasks = require("../data/tasks.json");
   
   function getTasksByUserId(userId) {
    const filteredTasks = tasks.filter((task) => {
      if (task.userId == userId) {
        return task;
      }
    });
    return filteredTasks;
  }
  
    function getTaskById(id) {
    for (i = 0; i < tasks.length; i++) {
      if (tasks[i].id == id) {
        return tasks[i];
      }
    }
    return;
  }

    function getUserByUserId(userId) {
    for (i = 0; i < users.length; i++) {
      if (users[i].userId == userId) {
        return users[i];
      }
    }
    return;
  }
  
  module.exports = { getTaskById, getTasksByUserId, getUserByUserId }