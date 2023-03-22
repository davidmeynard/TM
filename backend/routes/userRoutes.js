const express = require('express')
const router = express.Router()
const bcrypt = require("bcryptjs")
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')


//@desc create new user
//@route POST /api/users
//@access Public
router.post('/register' , asyncHandler( async (req, res) => {
    const { name, email, password} = req.body


    //check if any field is empty
    if(!name || !email || !password){
        res.status(400)
        throw new Error('Missing Fields')
    }

    const userExists = await User.findOne({ email })

    if (userExists) {
      res.status(400)
      throw new Error('User already exists')
    }

    // Hash password
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)


    const user = await User.create({
        name,
        email,
        password: hashedPassword,
      })

      if (user) {
        res.status(201).json({
          _id: user.id,
          name: user.name,
          email: user.email,
          token: generateToken(user._id),
        })
      } else {
        res.status(400)
        throw new Error("Invalid user data")
        
      }

}))


//@desc Login user
//@route /api/users
//@access Public
router.post('/login', asyncHandler( async (req, res) => {
  const {email, password} = req.body

  const user = await User.findOne({ email })

  if(user && bcrypt.compare(password, user.password)){
    res.status(201).json({
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else{
    res.status(400)
    throw new Error('Invalid Credentials')
  }


}))


//generate json web token
const generateToken = (id) => {
  return jwt.sign({id}, process.env.JWT_SECRET_TOKEN)
}

module.exports = router