const express = require("express");
const app = express();
const tasks = require("./data/tasks.json");
const users = require("./data/users.json");
const helpers = require("./helpers/helpers");

app.get("/tasksDetaile", function (req, res) {
  const newTasks = tasks.map((task) => {
    let userInfo = helpers.getUserByUserId(task.userId);
    task.userMobileNum = userInfo.mobileNumber;
    task.userName = userInfo.name;
    return task;
  });
  res.send(newTasks);
});

app.get("/users", function (req, res) {
  const nuser = users.map((user) => {
    console.log("USER INFO INSIDE MAP::", user);
    console.log("USER ID OF USER::", user.userId);
    user.task = helpers.getTasksByUserId(user.userId);
    return user;
  });
  res.send(nuser);
});

app.get("/", function (req, res) {
  res.send("Hello rahul saini");
});

app.get("/tasks", function (req, res) {
  res.send(tasks);
});

app.get("/tasks/:id", function (req, res) {
  let result = helpers.getTaskById(req.params.id);
  if (result) {
    res.send(result);
  } else {
    res.send({ message: `Task not found for given id: ${req.params.id}` });
  }
});

app.get("/tasks/byUser/:userId", function (req, res) {
  let responce = helpers.getTasksByUserId(req.params.userId);
  res.send(responce);
});

app.listen(3000);

// tasks/byUser/:userid
// create an arr of users , each user will have  thair name , mobile number and userid
//
