const usersStorage = require("../storages/usersStorage");
const { body, validationResult, matchedData } = require("express-validator");

exports.usersListGet = (req, res) => {
  res.render("index", {
    title: "User list",
    users: usersStorage.getUsers(),
  });
};

exports.usersCreateGet = (req, res) => {
  res.render("createUser", {
    title: "Create user",
  });
};

const alphaErr = "must only contain letters.";
const lengthErr = "must be between 1 and 10 characters.";


const validateUser = [
  body("firstName")
    .trim()
    .isAlpha().withMessage("First name must contain only letters.")
    .isLength({ min: 1, max: 10 }),

  body("lastName")
    .trim()
    .isAlpha().withMessage("Last name must contain only letters.")
    .isLength({ min: 1, max: 10 }),

  body("email")
    .trim()
    .isEmail().withMessage("Email must be valid.")
    .normalizeEmail(),

  body("age")
    .optional({ values: "falsy" })
    .isInt({ min: 18, max: 120 })
    .withMessage("Age must be between 18 and 120."),

  body("bio")
    .optional({ values: "falsy" })
    .isLength({ max: 200 })
    .withMessage("Bio must be under 200 characters.")
];


exports.usersCreatePost = [
  validateUser,
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("createUser", {
        title: "Create user",
        errors: errors.array(),
      });
    }
    const userData = matchedData(req);
    usersStorage.addUser(userData);
    res.redirect("/");
  }
];

exports.usersUpdateGet = (req, res) => {
  const user = usersStorage.getUser(req.params.id);
  res.render("updateUser", {
    title: "Update user",
    user: user,
  });
};

exports.usersUpdatePost = [
  validateUser,
  (req, res) => {
    const user = usersStorage.getUser(req.params.id);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).render("updateUser", {
        title: "Update user",
        user: user,
        errors: errors.array(),
      });
    }
    const userData = matchedData(req);
    usersStorage.updateUser(req.params.id, userData);
    res.redirect("/");
  }
];

exports.usersDeletePost = (req, res) => {
  usersStorage.deleteUser(req.params.id);
  res.redirect("/");
};
