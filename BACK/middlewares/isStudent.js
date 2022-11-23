const isStudent= (req, res, next) =>{
    if(req.user.role === 'student'){
        
    }
    else{res.status(401).send({msg:"not a student"});}
}
module.exports =isStudent;