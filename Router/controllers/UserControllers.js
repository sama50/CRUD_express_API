import UserModel from "../../models/User.js";

class UserControllers {
  static getAllData = async (req, res) => {
    const data = await UserModel.find();
    res.send({ all: data });
  };
  static addData =async (req, res) => {
       try {
           const data = new UserModel(req.body);
           const save = await data.save();
           res.send({data:save})
       } catch (error) {
           console.log(error)
       }
   
  };

  static getById = async (req, res) => {
    try {
        console.log(req.params)
        const data = await UserModel.findById(req.params.id)
        res.send({Data:data})
    } catch (error) {
        console.log(error)
    }
  };

  static updatebyId =async (req, res) => {
      try {
          console.log(req.body)
          const result = await UserModel.findByIdAndUpdate(req.params.id, req.body)
        res.send(result);
      } catch (error) {
          console.log(error)
      }
  };
  static deletebyid = async (req, res) => {
    try {
        const data = await UserModel.findByIdAndDelete(req.params.id)
        res.status(204).send({deleted:data})
    } catch (error) {
        console.log(error)
    }
  };
}

export default UserControllers;
