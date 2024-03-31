//external dependencies
const express = require("express");
const router = express.Router();

const group_controller = require('../controller/group')
const { ensureauth } = require("../middleware/middleware")

router.post("/creategroup",ensureauth, group_controller.createGroup)
router.put("/addmembers",ensureauth,group_controller.addMemberToGroup)
router.get("/groupbyid",ensureauth,group_controller.getGroupById)
router.get("/getallgroups",ensureauth,group_controller.getallGroupsByUserId)
router.put("/editgroupname",ensureauth,group_controller.editGroupName)

module.exports = router