const express = require("express");

const router = express.Router();

const Product = require("../models/product.model");

router.post("", async(req, res) => {
    try{
  const product = await Product.create(req.body);
  return res.status(201).send(product);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
});

router.get("", async(req, res) => {
    try{
    const product = await Product.find().lean().exec();
    return res.status(200).send(product);
}catch(err){
    return res.status(500).send(err.message)
}
});

router.get("/:id", async(req, res) => {
    try{
     let product
    }catch(err){
        return res.status(500).send(err.message);
    }
})

module.exports = router;