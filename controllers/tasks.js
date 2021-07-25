const Task = require('../models/Task');

exports.getAllTasks = async (req, res, next) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ msg: error.message });
    next(error);
  }
};

exports.createTask = async (req, res, next) => {
  try {
    const task = await Task.create(req.body);
    // res.json({ Status: 'Success', data: req.body });
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
    next(error);
  }
};

exports.getTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `No task with id ${taskID} found` });
    }

    res.status(200).json({ task });
    // res.json({ id: req.params.id });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndDelete({ _id: taskID });
    if (!task) {
      return res.status(404).json({ msg: `No task with id ${taskID} found` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
      new: true,
      runValidators: true,
    });

    if (!task) {
      return res.status(404).json({ msg: `No task with id ${taskID} found` });
    }

    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
