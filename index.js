import express from "express";
const router = express.Router();

router.post("/users",async(req,res)=>{
    try{
        const{name,email,phone}=req.body
        if(!name||!email||!phone){
            return res.status(400).json({mes:"all feilds are required"});
        }
        return res.status(200).json({mes:"successfull"});
    } catch(err){
        return res.status(500).json({mes:"internal server error"});
    }
});

router.get("/users",async(req,res)=>{
    try{
        return res.status(200).json({mes:"all users fetched"});
    }
    catch(err){
        return res.status(500).json({mes:"internal server error"});
    }
});

export default router;