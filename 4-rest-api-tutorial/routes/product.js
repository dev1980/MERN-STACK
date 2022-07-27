const express = require("express");

const router = express.Router();
const Shoes = require("../model/product");

router.get("/", async(req, res)=> {

   try {
    const shoes = await Shoes.find();
    res.json(shoes)
   }

   catch(error) {
    res.send(error)
   }
    
})

router.get("/:productId", async(req, res)=> {
    const id = req.params.productId;
    try {
        const product = await Shoes.findById(id)
        res.send(product)
    }
    catch(error) {
        res.send(error)
    }
})

router.post("/", async(req, res) =>{
 
    try{
        const shoe = await Shoes.create(req.body);
        res.json(shoe)
    }
    catch(error){
        res.send(error)
    }
})


router.delete("/:productId", async(req, res)=>{
    try {
        await Shoes.remove({"_id": req.params.productId})
        res.status(200).json({message: "Deleted"})
    }
    catch(error) {
        res.send(error)
    }
})

router.put("/:productId", async(req, res)=>{
    const productId = req.params.productId;

    try {
const product = await Shoes.updateOne({"_id": productId})
res.json(product)
    }

    catch(error) {
        res.send(error)
    }
})

module.exports = router;