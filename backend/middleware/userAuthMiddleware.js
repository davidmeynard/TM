const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")
const User = require("../models/userModel")

const authenticate = asyncHandler(async(req, res, next) => {
    let token

    //check if request contains authorization bearer with token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        
        try{
            //grab token
            token = req.headers.authorization.split(' ')[1]

            //verify if token is valid
            const userId = jwt.verify(token, process.env.JWT_SECRET_TOKEN)
            
            //find user by id decoded from token
            req.user = await User.findById(userId.id).select('-password')
            next()
        } catch(err){
            res.status(401)
            throw new Error('Not Authorized')
        }
    }

    if(!token){
        res.status(401)
        throw new Error('Not authorized, no token')
    }
})

module.exports = { authenticate}