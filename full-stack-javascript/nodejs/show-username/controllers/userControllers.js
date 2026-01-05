const db = require("../db/queries");

const getIndex = (req, res) => {
  console.log("usernames will be logged here - wip");
  res.send("Check the terminal for logged usernames");
};

const getNewUserForm = (req, res) => {
  res.sendFile(require("path").join(__dirname, "../views/index.html"));
};

const createNewUser = (req, res) => {
  console.log("username to be saved:", req.body.username);
  res.send("Username received");
};


async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.send("Usernames: " + usernames.map(user => user.username).join(", "));
}

async function createUsernameGet(req, res) {
  // render the form
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

module.exports = {
  getIndex,
  getNewUserForm,
  createNewUser,
  getUsernames,
  createUsernameGet,
  createUsernamePost
};
