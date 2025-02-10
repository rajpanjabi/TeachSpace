import mongoose from "mongoose";

const observationSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student", required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher", required: true },
  subject: { type: String, required: true },
  metric: { type: String, required: true }, // e.g., "Behavior", "Participation"
  observationText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Observation = mongoose.model("Observation", observationSchema);
export default Observation;