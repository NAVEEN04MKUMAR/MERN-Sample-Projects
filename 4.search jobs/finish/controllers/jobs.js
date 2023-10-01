const getallthejobs=async(req,res)=>{
    res.send('get all jobs')
}


const getjobs=async(req,res)=>{
    res.send('get jobs')
}


const createjobs=async(req,res)=>{
    res.send('create jobs')
}



const updatejobs=async(req,res)=>{
    res.send('update jobs')
}



const deletejobs=async(req,res)=>{
    res.send('delete jobs')
}

module.exports={
 getallthejobs,
  getjobs,
  createjobs,   
  updatejobs,
  deletejobs,
}