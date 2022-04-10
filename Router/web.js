import express from "express";
import cors from 'cors'
import UserControllers from './controllers/UserControllers.js'


const router = express.Router()

router.get("/",UserControllers.getAllData)
router.get("/:id",UserControllers.getById)
router.post("/",UserControllers.addData)
router.put("/:id",UserControllers.updatebyId)
router.delete("/:id",UserControllers.deletebyid)


export default router
