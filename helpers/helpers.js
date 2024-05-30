   
// const users = require("../data/users.json");
// const tasks = require("../data/tasks.json");
   
   function getTasksByUserId(userId , taskData) {
    const filteredTasks = taskData.filter((task) => {
      if (task.userId == userId) {
        return task;
      }
    });
    return filteredTasks;
  }
  
    function getTaskById(id ,taskData) {
    for (i = 0; i < taskData.length; i++) {
      if (taskData[i].id == id) {
        return taskData[i];
      }
    }
    return;
  }

    function getUserByUserId(userId, usersData) {
    for (i = 0; i < usersData.length; i++) {
      if (usersData[i].userId == userId) {
        return usersData[i];
      }
    }
    return;
  }
  
  function getUserById(Id, usersData) {
    for (i = 0; i < usersData.length; i++) {
      if (usersData[i].Id == Id) {
        return usersData[i];
      }
    }
    return;
  }
  
  module.exports = { getTaskById, getTasksByUserId, getUserByUserId , getUserById }