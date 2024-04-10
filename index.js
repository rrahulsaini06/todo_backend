const express = require("express");
const app = express();
const tasks = [
  {
    name: "go to school",
    discription: "do something new",
    id: "123",
    userId: "u101",
  },
  {
    name: " do home work",
    discription: "do something new again",
    id: "1234",
    userId: "u102",
  },
  {
    name: "get hair cut",
    discription: "do something new",
    id: "1235",
    userId: "u101",
  },
  {
    name: "get ready for study",
    discription: "do something new",
    id: "1236",
    userId: "u103",
  },
  { name: "take bath", discription: "do something new", userId: "u102" },
];
const users = [
  {
    name: "rahul",
    mobileNumber: 7691080706,

    userId: "u101",
  },
  {
    name: "ashish",
    mobileNumber: 9828470584,

    userId: "u102",
  },
  {
    name: "rohit",
    mobileNumber: 8058980758,

    userId: "u103",
  },
  {
    name: "aman",
    mobileNumber: 986876778,

    userId: "u1044",
  },
  {
    name: "komal",
    mobileNumber: 1544242442424,

    userId: "u1055",
  },
];

app.get("/tasksDetaile", function (req, res) {
  const newTasks = tasks.map((task) => {
    let userInfo = getUserByUserId(task.userId);
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
    user.task = getTasksByUserId(user.userId);
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
  let result = getTaskById(req.params.id);
  if (result) {
    res.send(result);
  } else {
    res.send({ message: `Task not found for given id: ${req.params.id}` });
  }
});
app.get("/tasks/byUser/:userId", function (req, res) {
  let responce = getTasksByUserId(req.params.userId);
  res.send(responce);
});

app.listen(3000);
function getTasksByUserId(userId) {
  console.log(
    "Filter tasks INSIDE getTasksByUserId function userId is:: ",
    userId
  );
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

// tasks/byUser/:userid
// create an arr of users , each user will have  thair name , mobile number and userid
//
