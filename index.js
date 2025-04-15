import express from "express";
const router = express.Router();

router.post("/users", async(req, res) => {
    try {
        const {name, email, phone} = req.body;
        if(!name || !email || !phone) {
            return res.status(400).json({mes: "all fields are required"});
        }
        return res.status(200).json({mes: "successful"});
    } catch(err) {
        return res.status(500).json({mes: "internal server error"});
    }
});

router.post("/signup", async(req, res) => {
    try {
        const {username, email, password, dateOfBirth} = req.body;
        
        if(!username) {
            return res.status(400).json({error: "Username cannot be empty"});
        }
        
        if(!email) {
            return res.status(400).json({error: "Email cannot be empty"});
        }
        
        if(password.length < 8 || password.length > 16) {
            return res.status(400).json({error: "Password length should be greater than 8 or less than or equal to 16"});
        }

        return res.status(201).json({
            message: "User registered successfully",
            user: {
                username,
                email,
                dateOfBirth
            }
        });
    } catch(err) {
        console.error(err);
        return res.status(500).json({error: "Internal server error"});
    }
});

router.get("/users", async(req, res) => {
    try {
        return res.status(200).json({mes: "all users fetched"});
    }
    catch(err) {
        return res.status(500).json({mes: "internal server error"});
    }
});

export default router;