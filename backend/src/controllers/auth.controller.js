import User from "../models/user.model.js";
import bcryptjs, { truncates } from "bcryptjs";
import { generateToken } from "../lib/utlis.js";
import cloudinary from "../lib/cloudinary.js";

export const signup = async (req, res) => {
	const { fullName, email, password } = req.body;
	try {
		if (!fullName || !email || !password) {
			return res.status(400).json({ message: "All fields are required" });
		}

		if (password.length < 6) {
			return res.status(400).json({ message: "Password must be at least 6 characters long" });
		}

		const user = await User.findOne({ email });
		if (user) {
			return res.status(400).json({ message: "User already exists" });
		}

		const salt = await bcryptjs.genSalt(10);
		const hashedPassword = await bcryptjs.hash(password, salt);
		const newUser = new User({
			fullName,
			email,
			password: hashedPassword,
		});

		// MongoDB store ID as _id
		if (newUser) {
			generateToken(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				email: newUser.email,
				profilePicture: newUser.profilePic,
			});
		} else {
			res.status(400).json({ message: "Invalid user data" });
		}

	} catch (error) {
		console.log("Error in signup controller", error.message);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email });
		if (!user) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		const isPasswordCorrect = await bcryptjs.compare(password, user.password);
		if (!isPasswordCorrect) {
			return res.status(400).json({ message: "Invalid credentials" });
		}

		generateToken(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			email: user.email,
			profilePicture: user.profilePic,
		});
	} catch (error) {
		console.log("Error in login controller", error.message);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const logout = (req, res) => {

	try {
		res.cookie("jwt", "", { maxAge: 0, });
		res.status(200).json({ message: "Logout successful" });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const updateProfile = async (req, res) => {
	try {
		const { profilePic } = req.body;
		const userId = req.user._id;

		if (!profilePic) {
			return res.status(400).json({ message: "Profile picture is required" });
		}
		const uploadResponse = await cloudinary.uploader.upload(profilePic)

		const updateUser = await User.findByIdAndUpdate(userId, { profilePic: uploadResponse.secure_url }, { new: true });
		if (!updateUser) {
			return res.status(400).json({ message: "User not found" });
		}
		res.status(200).json({
			_id: updateUser._id,
			fullName: updateUser.fullName,
			email: updateUser.email,
			profilePicture: updateUser.profilePic,
		});
	} catch (error) {
		console.log("Error in update profile controller", error.message);
		res.status(500).json({ message: "Internal server error" });
	}
};

export const checkAuth = (req,res) => {
	try {
		res.status(200).json(req.user);
	} catch (error) {
		console.log("Error in check auth controller", error.message);
		res.status(500).json({ message: "Internal server error" });
	}	
}