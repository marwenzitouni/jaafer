const isOwner= (req, res, next) =>{
    if(req.user.role === 'director'){
        
    }
    else{res.status(401).send({msg:"not Authorized"});}
}
module.exports =isOwner;