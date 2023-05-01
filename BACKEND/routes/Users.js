const router = require("express").Router();
const { response } = require("express");
const { find, findByIdAndDelete } = require("../models/User");
let user = require("../models/User");

router.route("/get/:id").get(async (req, res) => {
  let userId = req.params.id;
  const users = await user
  .find({userId : userId})
  .then((users) => {
    res.json(users);
  })
  .catch((err) => {
    console.log(err);
  });
});

module.exports = router;