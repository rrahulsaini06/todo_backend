const express = require("express");
const router = express.Router();
const UserModel = require("../models/userModel");

router.post("/create", async function (req, res) {
  try {
    const userInfo = req.body;
    //   let userCollection = await db.collection("users");
    //   let result = await userCollection.insertOne(userInfo);
    const user = new UserModel(userInfo);

    let result = await user.save();

    res.statusCode = 200;
    res.send(result);
  } catch (error) {
    res.statusCode = 500;
    res.send({ success: false, message: error?.message });
  }
});

router.delete("/delete/:userId", async function (req, res) {
  try {
    //   let usersCollection = await db.collection("users");
    //   let userData = await usersCollection.deleteOne({
    //     userId: req.params.userId,
    //   });
    let userData = await UserModel.deleteOne({
      userId: req.params.userId,
    });
    res.statusCode = 200;
    res.send({
      success: true,
      data: userData,
    });
  } catch (error) {
    res.statusCode = 500;
    res.send({ success: false, message: error?.message });
  }
});

router.get("/:id", async function (req, res) {
  try {
    //   let usersCollection = await db.collection("users");
    //   let userData = await usersCollection.findOne({userId:req.params.id}) ;
    //    await  userModel.collection()

    let userData = await UserModel.findOne({ userId: req.params.id });

    res.statusCode = 200;
    res.send({
      success: true,
      data: userData,
    });
  } catch (error) {
    res.statusCode = 500;
    res.send({ success: false, message: error?.message });
  }
});

router.put("/update/:userId", async function (req, res) {
  try {
    let userInfo = req.body;
    //   let usersCollection = await db.collection("users");
    //   let userData = await usersCollection.updateOne(
    //     { userId: req.params.userId },
    //     { $set: req.body}
    //   );
    let userData = await UserModel.updateOne(
      { userId: req.params.userId },
      { $set: req.body }
    );
    res.statusCode = 200;
    res.send({
      success: true,
      data: userData,
    });
  } catch (error) {
    res.statusCode = 500;
    res.send({ success: false, message: error?.message });
  }
});

module.exports = router;
