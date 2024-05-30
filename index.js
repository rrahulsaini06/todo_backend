const express = require("express");
const app = express();
// const tasks = require("./data/tasks.json");
// let users = require("./data/users.json");
const helpers = require("./helpers/helpers");
const bodyParser = require("body-parser");
const mongoUtil = require("./mongoUtil");
const tasksRouter =require("./routes/task");
const usersRouter =require("./routes/user");
 
// mongoUtil.connectToServer( function( err, client ) {
//   if (err) console.log(err);
//   console.log(client)
//   // start the rest of your app here
// } );
global.db=null;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/tasks' ,tasksRouter);
app.use('/users' , usersRouter);



// app.get("/tasksDetaile", async function (req, res) {
//   try {
//     let userCollection = await db.collection("users");
//     let userData = await userCollection.find().toArray();
//     let tasksCollection = await db.collection("tasks");
//     let taskData = await tasksCollection.find().toArray();
//     const newTasks = taskData.map((task) => {
//       let userInfo = helpers.getUserByUserId(task.userId, userData);
//       task.userMobileNum = userInfo.mobileNumber;
//       task.userName = userInfo.name;
//       return task;
//     });
//     res.statusCode = 200;
//     res.send(newTasks);
//   } catch (error) {
//     res.statusCode = 500;
//     res.send({ success: false, message: error?.message });
//   }
// });
// router.get("", async function (req, res) {
//   try {
//     let userCollection = await db.collection("users");
//     let userData = await userCollection.find().toArray();
//     let tasksCollection = await db.collection("tasks");
//     let taskData = await tasksCollection.find().toArray();
//     const nuser = userData.map((user) => {
//       user.task = helpers.getTasksByUserId(user.userId, taskData);
//       return user;
//     });
//     res.statusCode = 200;
//     res.send(nuser);
//   } catch (error) {
//     res.statusCode = 500;
//     res.send({ success: false, message: error?.message });
//   }
// });


app.get("/", function (req, res) {
  try {
    res.statusCode = 200;
    res.send("Hello rahul saini");
  } catch (error) {
    res.statusCode = 500;
    res.send({ success: false, message: error?.message });
  }
});

// app.get("/tasks/byUser/:userId", async function (req, res) {
//   try {
//     let tasksCollection = await db.collection("tasks");
//     let taskData = await tasksCollection.find().toArray();
//     let responce = helpers.getTasksByUserId(req.params.userId, taskData);
//     res.statusCode = 200;
//     res.send(responce);
//   } catch (error) {
//     res.statusCode = 500;
//     res.send({ success: false, message: error?.message });
//   }
// });

// app.post("/users/:userId/ushhde", async function (req, res) {
//   try {
//     let query = req.query;
//     let userInfo = req.body;
//     let token = req.params.userId;
//     let collection = db.collection("users");
//     let yyusay = await collection.insertOne(userInfo);
//     res.statusCode = 200;
//     res.send(yyusay);
//   } catch (error) {
//     res.statusCode = 500;
//     res.send({ success: false, message: error?.message });
//   }
// });


app.listen(3000, async (err, data) => {
  console.log("server started at port 3000 : http://localhost:3000");
  db = await mongoUtil.init();
});

// tasks/byUser/:userid
// create an arr of users , each user will have  thair name , mobile number and userid
//
