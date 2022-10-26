const usersRouter = require('express').Router();
const { addNewUser , updateUser , deleteUser , getAllUsers } = require("../Controllers/users");

usersRouter.get("/" , getAllUsers);
usersRouter.post("/" , addNewUser);
usersRouter.put("/:id" , updateUser);
usersRouter.delete("/:id" , deleteUser);

module.exports = usersRouter ;

