import express from "express";
import multer from '../middlewares/multer-config.js';



const router = express.Router();


router.route("/").post(multer("screenshot",512*1024), (req, res) => {
    console.log(req.data)
    res.json({ message: 'screenshot uploaded successfully' });
  });




export default router;