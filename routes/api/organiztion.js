const express = require("express");
const asyncHandler = require("express-async-handler");
const {Organization} = require('../../db/models');

const router = express.Router();

// To get your organizations
router.get('/', asyncHandler( async(req,res)=>{
    const {userId} = req.body;
    const organizations = await Organization.findAll({were:{userId:userId}});
    res.json(organizations);
}));

// To create your organization
router.post('/', asyncHandler(async (req,res)=>{
    const {userId,name, description} = req.body;
    let newOrganization = await Organization.create({userId:userId,name:name, description:description});
    res.json(newOrganization);
}))

// To delete your organizations
// ToDo set up propper id handling
router.delete('/:id', asyncHandler( async (req,res)=>{
    const {organizationId} = req.body;
    await Organization.delete({where:{id:organizationId}}); // place Holder.
}))

module.exports = router;
