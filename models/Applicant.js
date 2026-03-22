import mongoose from "mongoose"

const ApplicantSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  interest: String,
  reason: String,
}, { timestamps: true })

export default mongoose.models.Applicant ||
  mongoose.model("Applicant", ApplicantSchema)