import mongoose from "mongoose";

const inviteSchema = new mongoose.Schema({
  inviterId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  code: {
    type: String,
    required: true,
    unique: true,
  },
  isUsed: {
    type: Boolean,
    default: false,
  },
  expiresAt: {
    type: Date,
    required: true,
  },
}, { timestamps: true });

const Invite = mongoose.model("Invite", inviteSchema);
export default Invite;