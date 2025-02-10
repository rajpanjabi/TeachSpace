import Student from "../models/student.js";

// Add a new student
export const addStudent = async (req, res) => {
  const { name, grade, picture } = req.body;

  try {
    const student = new Student({ name, grade, picture });
    await student.save();
    res.status(200).json({ message: "Student added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all students
export const getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};