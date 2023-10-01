const product=require('../models/products');

const getallproductsstatic=async(req,res)=>{
    const search=''
    const products=await product.find({price:{$gt:10}}).sort('name').select('name price')// .limit(4)        
   res.status(200).json({products,nbHits:products.length})

} 

const getallproducts=async(req,res)=>{
 
  const {featured,company,name,sort,fields,numericFilters}=req.query
  const queryobject={}

  if(featured){
    queryobject.featured=featured==='true'?true:false
  }
  if(company){
queryobject.company=company
  }
  if(name){
    queryobject.name={$regex:name,$options:'i'}
  }

  if(numericFilters){
    const operatormap={
      '>':'$gt',
      '>=':'$gte',
      '=':'$eq',
      '<':'$lt',
      '<=':'$lte',
    };
const regEx=/\b(<|>|>=|=|<|<=)\b/g;
let filters=numericFilters.replace(regEx,(match)=>`-${operatormap[match]}-`);
// console.log(filters)
const options=['price','rating']
filters=filters.split(',').forEach((item)=>{
  const [field,operator,value]=item.split('-')
  if(options.includes(field)){
     queryobject[field]={[operator]:Number(value)}
  }
})
  }
  console.log(queryobject)
  let result=product.find(queryobject)
  let sortlist = [];
  if(sort){
     sortlist=sort.split(',').map(field=>{
        if(field.startsWith('-')){
            return [field.substring(1),'desc'];
        }
        return [field,'asc'];
    });
  }else{
    sortlist.push(['createdAt', 'asc']);
  }
      result=result.sort(sortlist)

  if(fields){
    const fieldlist=fields
    .split('/').join('')
    result=result.select(fieldlist)
  }
const page=Number(req.query.page)||1
const limit=Number(req.query.limit)||10
const skip=(page-1)*limit;
result=result.skip(skip).limit()

const products=await result.limit(3)
    res.status(200).json({products,nbHits:products.length})
}

module.exports={
    getallproducts,getallproductsstatic
}