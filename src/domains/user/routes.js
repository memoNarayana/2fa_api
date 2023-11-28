const express = require('express');
const router = express.Router();
const {authenticateUser} = require("./controller"); 

router.post("/login", async (req, res) => {
    try { 
        let {email, password} = req.body;
        email = email.trim();
        password = password.trim();

        if(!(email && password)) {
            throw Error("Empty credentials - Please provide a valid details")
        }

        const authUser = await(authenticateUser({email, password}));

        res.status(200).json(authUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
 });

 module.exports = router;