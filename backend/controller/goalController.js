const asyncHandler = require("express-async-handler");
const Goal = require("../models/goalModel.js");
const User = require("../models/userModel.js");
const getGoals = asyncHandler(async (req, res) => {
  const goals = await Goal.find({ user: req.user.id });
  res.status(200).json(goals);
});

const setGoals = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("请传入数据");
  }
  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id,
  });
  res.status(200).json(goal);
});

const updateGoals = asyncHandler(async (req, res) => {
  // 获取路由id
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("没有找到id对应数据");
  }

  // 用户校验
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(400);
    throw new Error("没有找到用户");
  }
  // 确保登录用户 等于 目标用户
  if (goal.user.toString() !== user.id) {
    res.status(400);
    throw new Error("用户未授权");
  }

  const updateGoal = await Goal.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updateGoal);
});

const deleteGoals = asyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);
  if (!goal) {
    res.status(400);
    throw new Error("没有找到id对应数据");
  }
  // 用户校验
  const user = await User.findById(req.user.id);
  if (!user) {
    res.status(400);
    throw new Error("没有找到用户");
  }
  // 确保登录用户 等于 目标用户
  if (goal.user.toString() !== user.id) {
    res.status(400);
    throw new Error("用户未授权");
  }

  await goal.remove();
  res.status(200).json({ id: req.params.id });
});
module.exports = {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
};
