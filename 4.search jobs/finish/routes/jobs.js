const express=require('express')
const {register}=require('../controllers/auth')
const router = express.Router()

const {
  getallthejobs,
  getjobs,
  createjobs,   
  updatejobs,
  deletejobs,   
}=require('../controllers/jobs')

router.route('/').post(createjobs).get(getallthejobs)
router.route('/:id').get(getjobs).delete(deletejobs).patch(updatejobs)

// module.exports={ 
//     getallthejobs,
//   getjobs,
//   createjobs,   
//   updatejobs,
//   deletejobs,   
    
// }


module.exports=router