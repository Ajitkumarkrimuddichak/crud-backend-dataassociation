var express = require("express");
var router = express.Router();
const userModel = require("./users");
const postModel = require("./post");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Data Association" });
});

router.get("/alluserposts", async function (req, res, next) {
  let user = await userModel
    .findOne({ _id: "658ae7c43c020433382a02bc" })
    .populate("posts");
  res.send(user);
});

router.get("/createuser", async function (req, res, next) {
  let createduser = await userModel.create({
    username: "ajitaa",
    password: "123456",
    posts: [],
    email: "ajitkumar@gmail.com",
    fullName: "Ajit Kumaraaa",
  });
  res.send(createduser);
});

router.get("/createpost", async function (req, res, next) {
  let createdpost = await postModel.create({
    postText: "my name is Ajit kumar",
    user: "658ae7c43c020433382a02bc",
  });
  let user = await userModel.findOne({ _id: "658ae7c43c020433382a02bc" });
  user.posts.push(createdpost._id);
  await user.save();
  res.send("done");
});
module.exports = router;
