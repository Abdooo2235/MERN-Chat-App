import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
        },
        fullName: {
            type: String,
            required: true,
        },
        password: {
            type: String,
            required: true,
            minlength: [6, "Password must be at least 6 characters long"],
        },
        profilePic: {
            type: String,
            default: "",
        },
        coverPicture: {
            type: String,
            default: "",
        },
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
