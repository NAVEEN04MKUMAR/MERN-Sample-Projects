const task=require('../models/task')
const asyncwrapper=require('../middleware/async');
const {createcustomerror}=require('../error/custom error');

const getalltasks=asyncwrapper(async(req,res)=>{
   const tasks=await task.find({})
res.status(200).json({tasks})
})
// res.status(200).json({status:'success',data:{tasks,nbHits:tasks.length}})
// res.status(500).json({msg:error})    

const createtask=asyncwrapper(async(req,res)=>{
    const Task=await task.create(req.body)
    res.status(201).json({Task}) 
})

const gettask=asyncwrapper(async(req,res)=>{
const {id:taskid}=req.params
const Task=await task.findOne({_id:taskid})
if(!Task){
    return next(createcustomerror(`no task with id:${taskid}`,404));
//    return res.status(404).json({msg:`no task wit id:${taskid}`})
}
res.status(200).json({Task})
})   

  
const updatetask=async(req,res)=>{
try{
    const {id:taskid}=req.params
    const Task=await task.findOneAndUpdate({_id:taskid},req.body,{
        new:true,
        runValidators:true,
})
if(!Task){
   // return res.status(404).json({msg:`no task with id:${taskid}`})
    return next(createcustomerror(`no task with id:${taskid}`,404));

}res.status(200).json({Task})
}
catch(error){
    res.status(500).json({msg:error})
}
}


const deletetask=asyncwrapper(async(req,res)=>{
    const {id:taskid}=req.params
    const Task=await task.findOneandDelete({_id:taskid})
    if(!Task){
    return res.status(404).json({msg:`no task with id:${taskid}`})
}
res.status(200).json({Task})
})

 
const edittask=(async(req,res)=>{

    const {id:taskid}=req.params
    const Task=await task.findOneAndUpdate({_id:taskid},req.body,{
        new:true,
        runValidators:true,
        overwrite:true,
})
if(!Task){
    return res.status(404).json({msg:`no task with id:${taskid}`})
}res.status(200).json({Task})

})

module.exports={
    getalltasks,
    createtask,
    gettask,
    updatetask,
    deletetask,
    edittask
}