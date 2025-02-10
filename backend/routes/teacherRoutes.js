import express from "express";
import { loginTeacher, registerTeacher, getAllTeachers } from "../controllers/teacherController.js";

const router = express.Router();

router.post("/register", registerTeacher);
router.get("/", getAllTeachers);
router.post("/login", loginTeacher);

export default router;