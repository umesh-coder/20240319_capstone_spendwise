//external dependencies
const express = require("express");
const routes = express.Router();

//internal dependencies
const { signup, login, deleteaccount } = require("../controller/user")
const { createexpense, getallexpenses, getsingleexpense, updateexpense, deleteexpense, savedata, getsavedata, updatesavedata, getcategory, savecategory ,updateprofile,updatename } = require("../controller/expense")
const { ensureauth } = require("../middleware/middleware")

//create expense
routes.post("/createexpense", ensureauth, createexpense)

//get all expenses
routes.get("/getallexpense/:id", ensureauth, getallexpenses)

//get single expense
routes.get("/getsingleexpense/:userId/:id", ensureauth, getsingleexpense)

//update expense
routes.patch("/updateexpense/:userId/:id", ensureauth, updateexpense)

//delete expense
routes.delete("/deleteexepense/:userId/:id", ensureauth, deleteexpense)

//sava data
routes.post("/savedata", savedata)

//get save data
routes.get("/getsavedata/:id", getsavedata)

//update save data
routes.post("/updatesavedata/:id", updatesavedata)

//get category
routes.get("/getcategory/:id", getcategory)

//save category
routes.post('/savecategory/:id', savecategory);


//update profile
routes.post('/updateprofile/:id',updateprofile)


//update name
routes.post('/updatename/:id', updatename)




//exporting Route
module.exports = routes;
