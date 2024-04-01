//interal dependencies
const UserModel = require('../models/userModel');
const groupModel = require('../models/groupModel')

const createGroup = async (req, res) => {
    try {

      const groupcreatedby = req.decoded;

      // Extract group details from request body
      const { name, members, groupcreatedat, expenses} = req.body;

      // Create a new group using the group model
      const newGroup = new groupModel({
        name: name,
        members: members,
        groupcreatedat: groupcreatedat,
        expenses: expenses,
        groupcreatedby: groupcreatedby.userId,
      });

      // Save the group to the database
      const savedGroup = await newGroup.save();

      res.status(201).json({
        success: true,
        message: "Group created successfully!",
        group: savedGroup,
      });
    } catch (error) {
      // Handle different error scenarios
      if (error.name === "ValidationError") {
        // Handle validation errors
        return res.status(400).json({ error: error.message });
      } else if (error.name === "AuthorizationError") {
        // Handle authorization errors
        return res
          .status(403)
          .json({ error: "You are not authorized to create a group." });
      } else if (error.name === "DatabaseConnectionError") {
        // Handle database connection errors
        return res.status(500).json({ error: "Database connection error" });
      } else if (error.name === "UnexpectedInputFormatError") {
        // Handle unexpected input format errors
        return res.status(400).json({ error: "Unexpected input format" });
      } else {
        // Handle other errors with a generic message
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
    }
  };

const addMemberToGroup = async (req, res) => {
  try {
    const userData = req.decoded;
    const userId = userData.userId
    // Extract group ID from query parameters
    const { groupId } = req.query;

    // Extract member details from request body
    const { members } = req.body;

    // Find the group by ID
    const group = await groupModel.findById(groupId);

    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }

    if(!(userId == group.groupcreatedby)){
      return res.status(400).json({error: "user is not the owner of the group"})
    }

    // Add new members to the group
    group.members.push(...members);

    // Save the updated group
    const updatedGroup = await group.save();

    res.status(200).json({
      success: true,
      message: "Members added to group successfully!",
      group: updatedGroup,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getGroupById = async (req, res) => {
  try {
    const userData = req.decoded;
    const userId = userData.userId
    const { groupId } = req.query;

    if (!userId) {
      return res.status(400).json({ error: "User ID is required in query parameters" });
    }

    const group = await groupModel.findById(groupId)
    
    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }

    // Check if the specified user is a member of the group
    const isMember = group.members.some(member => member.toString() === userId);

    if (!isMember) {
      return res.status(403).json({ error: "The specified user is not a member of this group" });
    }

    res.status(200).json({
      success: true,
      group
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getallGroupsByUserId = async (req, res) => {
  try {
    const userData = req.decoded;
    const userId = userData.userId

    // Find all groups where the provided userId is present in the members array
    const groups = await groupModel.find({ members: userId });

    res.status(200).json({
      success: true,
      groups
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const editGroupName = async (req, res) => {
  try {
    const userData = req.decoded;
    const userId = userData.userId
    const { groupId } = req.query;
    const { name } = req.body;

    // Find the group by ID
    const group = await groupModel.findById(groupId);

    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }

    if(!(userId == group.groupcreatedby)){
      return res.status(400).json({error: "user is not the owner of the group"})
    }

    // Update the group name
    group.name = name;

    // Save the updated group
    const updatedGroup = await group.save();

    res.status(200).json({
      success: true,
      message: "Group name updated successfully",
      group: updatedGroup
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const deleteGroup = async (req, res) => {
  try {
    const userData = req.decoded;
    const userId = userData.userId
    const { groupId } = req.query;

    // Find the group by ID
    const group = await groupModel.findById(groupId);

    if (!group) {
      return res.status(404).json({ error: "Group not found" });
    }

    if(!(userId == group.groupcreatedby)){
      return res.status(400).json({error: "user is not the owner of the group"})
    }

    // Delete the group by ID
    const result = await groupModel.deleteOne({ _id: groupId });

    res.status(200).json({
      success: true,
      message: "Group deleted successfully"
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

  module.exports = {createGroup,addMemberToGroup,getGroupById,getallGroupsByUserId,editGroupName,deleteGroup}


  