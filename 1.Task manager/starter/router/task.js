const express=require('express');
const router=express.Router()

const {getalltasks,createtask,gettask,updatetask,deletetask,edittask}=require('../controllers/task');
router.route('/')
.get(getalltasks)
.post(createtask)
router
.route('/:id')
.get(gettask)
.patch(updatetask)
.delete(deletetask)
.put(edittask)


// router.route('/').get((req,res)=>{
//     res.send('all items')
// })

module.exports=router;  