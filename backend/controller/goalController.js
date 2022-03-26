const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel.js");
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find();
  res.status(200).json(goals);
});
const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("请传入数据");
  }
  // const goal = await
  res.status(200).send("Get goals");
});
const updateGoals = asyncHandler(async (req, res) => {
  res.status(200).send(`Get goals ${req.params.id}`);
});
const deleteGoals = asyncHandler(async (req, res) => {
  res.status(200).send(`Get goals ${req.params.id}`);
});
module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
