

 const handleResponse = (res,status,message,error=null,data=null) => {
  return res.status(status).json({message,error,data})
}
module.exports=handleResponse
