import express from "express";
import { addStudent, getAllStudents, getStudentsByTeacher } from "../controllers/studentController.js";

const router = express.Router();

router.post("/addStudent", addStudent);
router.get("/getAllStudents", getAllStudents);
router.get("/getStudents/:teacherName", getStudentsByTeacher)

export default router;