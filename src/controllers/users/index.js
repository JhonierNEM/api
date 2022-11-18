const {User} = require('../../db')

const signUp = async (req, res) => {
    const { email, userName, password, photo, mobil } = req.body;
  
    try {
      const findUser = await User.findOne({
        where: { email: email },
      });
  
      if (findUser) throw new Error("User already exist");
   
      const createUser = await User.create({
        email: email,
        userName: userName,
        password: password,
        photo: photo,
        mobil: mobil,
      });
  
      res.status(201).json({ message: "User created!", payload: createUser });
    } catch (err) {
      res.status(400).json({ Error: err.message });
    }
  };

module.exports={
    signUp
}