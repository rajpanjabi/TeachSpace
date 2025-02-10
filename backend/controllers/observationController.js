import Observation from "../models/observation.js";

// Add a new observation
export const addObservation = async (req, res) => {
  const { student, teacher, subject, metric, observationText } = req.body;

  try {
    const observation = new Observation({
      student,
      teacher,
      subject,
      metric,
      observationText,
    });
    await observation.save();
    res.status(201).json({ message: "Observation added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};

// Get observations for a student
export const getObservationsByStudent = async (req, res) => {
  try {
    const observations = await Observation.find({ student: req.params.studentId }).populate("teacher");
    res.status(200).json(observations);
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
};