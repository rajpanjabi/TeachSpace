import Teacher from "../models/teacher.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const JWT_SECRET = "your-secret-key"; 

// Register a new teacher
export const registerTeacher = async (req, res) => {
  const { name, email, password, subjects } = req.body;

  try {
    const teacherExists = await Teacher.findOne({ email });
    if (teacherExists) {
      return res.status(400).json({ message: "Teacher already exists" });
    }
     // Hash the password before saving
     const salt = await bcrypt.genSalt(10);
     const hashedPassword = await bcrypt.hash(password, salt);

    const teacher = new Teacher({ name, email, password:hashedPassword, subjects });
    await teacher.save();
    res.status(200).json({ message: "Teacher registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all teachers
export const getAllTeachers = async (req, res) => {
  try {
    const teachers = await Teacher.find();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

export const loginTeacher = async (req, res) => {
  const { email, password } = req.body;

  try {
    const teacher = await Teacher.findOne({ email });
    if (!teacher) {
      return res.status(404).json({ message: "Teacher not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, teacher.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: teacher._id, name: teacher.name, email: teacher.email },
      JWT_SECRET,
      { expiresIn: "1h" } // Token expiration time
    );

    // Set token in HTTP-only cookie
    res.cookie("authToken", token, {
      httpOnly: true,  // Cookie cannot be accessed via JavaScript
      secure: process.env.NODE_ENV === "production",  // Use HTTPS in production
      maxAge: 3600 * 1000,  // 1 hour
      sameSite: "Strict",  // Helps with CSRF protection
    });

    res.status(200).json({ message: "Login successful", teacher });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};