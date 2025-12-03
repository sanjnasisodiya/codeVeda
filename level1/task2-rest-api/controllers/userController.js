import { users } from "../data/user.js";

//get all users
export const getAllUsers = (req, res) => {
  res.status(200).json(users);
};

//get user by id
export const getUserById = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  res.status(200).json(user);
};
//create user
export const createUser = (req, res) => {
  const { name, subject } = req.body;

  if (!name || !subject) {
    res.status(404).json({ message: "name and subject are required" });
  }

  const newUser = {
    id: users.length + 1,
    name,
    subject,
  };

  users.push(newUser);
  res.status(201).json({ message: "User created Successfully" });
};

//update user
export const updateUser = (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = req.body.name || user.name;
  user.subject = req.body.subject || user.subject;

  res.status(200).json(user);
};

//delete user
export const deleteUser = (req, res) => {
  const id = Number(req.params.id);
  const index = users.findIndex((u) => u.id === id);

  if (!index === -1) {
    return res.status(404).json({ message: "user not found" });
  }

  users.splice(index, 1);
  res.status(201).json({ message: "User deleted successfully" });
};
