import User from "../models/user.model.js";
import Message from "../models/message.model.js";

export const getUsresForSidebar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    const fillteredUsers = await User.find({ _id: { $ne: loggedInUserId } }).select("-password");
    res.status(200).json(fillteredUsers);
  } catch (error) {
    console.error("Error in getUsresForSidebar:", error.message);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id:userToChatId } = req.params
    const senderId = req.user._id;
    
    const messages = await Message.find({
      $or: [
        { sender: senderId, receiver: userToChatId },
        { sender: userToChatId, receiver: senderId },
      ],
    });
    
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error in getMessages:", error.message);
    res.status(500).json({ error: "Failed to fetch users" });
  }
};