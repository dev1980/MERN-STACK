const express = require("express");
const { route } = require("../../1-express/routes/users");

// const app = express();

const router = express.Router();

router.get("/", (req, res) => {
  res.send("this will get me all the user");
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.send(`the single user with id is: ${id}`);
});

module.exports = router;