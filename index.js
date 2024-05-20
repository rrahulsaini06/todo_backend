const express = require("express");
const app = express();
// const tasks = require("./data/tasks.json");
// let users = require("./data/users.json");
const helpers = require("./helpers/helpers");
const bodyParser = require('body-parser');  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
const  mongoUtil =  require("./mongoUtil");

// mongoUtil.connectToServer( function( err, client ) {
//   if (err) console.log(err);
//   console.log(client)
//   // start the rest of your app here
// } );
var db;

app.get("/tasksDetaile", async function (req, res) {
  let userCollection = await db.collection('users')
  let userData = await userCollection.find().toArray()
   let tasksCollection = await db.collection('tasks');
   let taskData = await tasksCollection.find().toArray()
  const newTasks = taskData.map((task) => {
    let userInfo = helpers.getUserByUserId(task.userId , userData);
    task.userMobileNum = userInfo.mobileNumber;
    task.userName = userInfo.name;
    return task;
  });
  res.send(newTasks);
});

app.get("/users",async function (req, res) {
  let userCollection = await db.collection('users')
  let userData = await userCollection.find().toArray()
   let tasksCollection = await db.collection('tasks');
   let taskData = await tasksCollection.find().toArray()
  const nuser = userData.map((user) => {
    user.task = helpers.getTasksByUserId(user.userId ,taskData);
    return user;
  });
  res.send(nuser);
});

app.get("/", function (req, res) {
  res.send("Hello rahul saini");
});

app.get("/tasks", async function (req, res) {
  let collection = await db.collection('tasks');
  let tasksData = await collection.find({}).toArray();
  res.send(tasksData);
});

app.get("/tasks/:id", async function (req, res) {
  let tasksCollection = await db.collection('tasks');
  let taskData = await tasksCollection.find().toArray()
  let result = helpers.getTaskById(req.params.id ,taskData );
  if (result) {
    res.send(result);
  } else {
    res.send({ message: `Task not found for given id: ${req.params.id}` });
  }
});

app.get("/tasks/byUser/:userId", async function (req, res) {
  let tasksCollection = await db.collection('tasks');
  let taskData = await tasksCollection.find().toArray()
  let responce = helpers.getTasksByUserId(req.params.userId, taskData);
  res.send(responce);
});


app.post("/users", async function (req, res) {
  let userInfo = req.body;
  let collection =  db.collection('users');
  let yyusay = await collection.insertOne(userInfo);
  res.send(yyusay);
});

app.post("/tasks/create", async function (req, res) {
  let newTask = req.body;
  let collection =  db.collection('tasks/create');
  let yyusay = await collection.insertOne(newTask);
  res.send(yyusay);
});


app.listen(3000, async(err, data)=>{
  console.log("server started at port 3000 ")
  db = await mongoUtil.init();
});

// tasks/byUser/:userid
// create an arr of users , each user will have  thair name , mobile number and userid
//
