import { Task } from "../Models/Tasks";
import { Request, Response } from "express";

const fetchTasks = async (req: Request, res: Response): Promise<void> => {
  try {
    const tasks = await Task.find();
    res.status(200).json({ tasks });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const createTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const { task, category } = req.body;
    const createdTask = new Task({
      task,
      category,
    });
    await createdTask.save();
    res.status(201).json({ msg: "Task saved successfully!" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const updateTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req?.params?.id;
    const data = req?.body;
    const task = await Task?.findByIdAndUpdate(id, data, { new: true });
    res.status(200).json({ task });
  } catch (error) {
    res.status(500).json({ error });
  }
};

const deleteTask = async (req: Request, res: Response): Promise<void> => {
  try {
    const id = req?.params?.id;
    await Task.findByIdAndDelete(id);
    res.status(200).json({ msg: "Task deleted successfully!" });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export { fetchTasks, createTask, updateTask, deleteTask };
