const Users = require("../Models/users");
const bcrypt = require("bcryptjs");

const getAllUsers = async (req , res) => {
   try {
        const users = await Users.find();
        if (users.length) return res.status(200).send({ success:true ,  users});
        return res.status(400).send({ success:false,  message:'no users found'})
   }

   catch (err) {
    return res.status(500).send({ success:false ,  message: 'error in retrieve users' });
   }
}

const addNewUser = async (req , res) => {
  try {
     if (!req.body.password) return res.status(400).json({ success: false , message : "Password must be provided" });
     const { password } = req.body ;
     bcrypt.hash(password , 10 , async (err , hashedPassword) => {
        if (err) return res.status(500).send({ message: 'error in hashing the password' });
        req.body.password = hashedPassword;
        await Users.create(req.body);
        return res.status(200).send({ success: true , message : "user created" }) ;
     })
  }
  catch (err) {
   return res.status(500).send({ success:false ,  message: 'error in adding new user' })
  }
}

const updateUser = async (req,res) => {
    try {
      const { id } =  req.params ;
      const user = await Users.findByIdAndUpdate(id , req.body);
      if (!user) return res.status(400).send({ success:false , message: "User not exist with the specified Id" });
      const users = await Users.find();
      return res.status(200).send({ success: true , users }) ;
    }
    catch (err) {
        return res.status(500).send({ success:false , message: 'Error in update new user' })
    }
}

const deleteUser = async (req,res) => {
   try {
    const { id } =  req.params ;
    const user = await Users.findByIdAndRemove(id);
    if (!user) return res.status(400).send({ success:false , message: "User not exist with the specified Id" });
    const users = await Users.find();
    return res.status(200).send({ success: true , users }) ;
   }
   catch(err) {
    return res.status(500).send({ success:false , message: 'Error in deleting user' })
   }
}

module.exports = {
    getAllUsers ,
    addNewUser ,
    updateUser ,
    deleteUser
}