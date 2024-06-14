const Contact = require("../models/contact-model");

const contactForm = async(req,res)=>{ 
    try{
        const response = req.body;
        await Contact.create(response);
        res.status(200).send("Message sent successfullly");
    } catch(error){
        return res.status(500).json({msg:"Message not sent"})
    }
};


module.exports={contactForm};