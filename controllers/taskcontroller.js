const TaskModel  = require('../models/taskmodel') 
const { SendResponse } = require("../helpers/helpers");

const TaskController={
    add: async(req,res)=>{
try{
        let { title, description , startdate , enddate , achievekey , foreignkey  } = req.body
        let obj = { title, description , startdate , enddate , achievekey , foreignkey }
    
        let errArr = [];
        if (!obj.title) {
            errArr.push("Title in required")
        }
        if (!obj.description) {
            errArr.push("Description in required")
        }
       if(!obj.startdate){
         errArr.push("Start date in required")
       }
       if(!obj.enddate){
         errArr.push("End date in required")
       }
        if (errArr.length > 0) {
            res.status(400).send(SendResponse(false, "Validation Error !", errArr));

        }
        else {
          let task = new TaskModel(obj)
          let result = await task.save()
          res.status(200).send(SendResponse(true,"sent successfully",result))
        }
    } catch (err){
     res.status(500).send(SendResponse(false , "internal server error =>",err ))
    }},
    
    get: async(req,res)=>{
        try{
        let result = await TaskModel.find();
        res.status(200).send(SendResponse(true , "get successfully",result))
        }catch(err){
        res.status(500).send(SendResponse(false , "internal server error" ,err))
        }
    },
    
    getbyid:async (req,res)=>{
    try{
        let id = req.params.id
        let result = await TaskModel.findById(id)
        res.status(200).send(SendResponse(true , "" ,result))      
    }catch(err){
    res.status(500).send(SendResponse(false , "internal server error" ,err))      
    }},
    
    del: (req,res)=>{
    try {
    let id =  req.params.id
    TaskModel.findByIdAndDelete(id).then(()=>{
    res.status(200).send(SendResponse(true, "data delete sucessfully"))
    })
    .catch((err)=>{
        res.status(500).send(SendResponse(false, "intrnal server error" , err))
    })}
    catch(err) {
    res.status(500).send(SendResponse(false, "intrnal server error" , err))}},
    
    edit:async(req ,res)=>{
        try{
            let id = req.params.id
            
        let result = await TaskModel.findByIdAndUpdate(id , req.body)    
        res.status(200).send(SendResponse(true , "data edit sucessfully" , result))
        }catch(err){
            res.status(500).send(SendResponse(false , "internal server error" , err))}
         }}
module.exports = TaskController;