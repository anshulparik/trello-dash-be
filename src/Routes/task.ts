import { Router } from "express";
import { createTask, deleteTask, fetchTasks, updateTask } from "../Controllers/task";

const router = Router();

router.route("/").get(fetchTasks).post(createTask)
router.route('/:id').patch(updateTask).delete(deleteTask);

export { router };
