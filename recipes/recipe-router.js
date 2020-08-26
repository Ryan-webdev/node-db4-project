const express = require('express');

const router = express.Router();

const Recipes = require('./recipe-model')

router.get('/', async (req, res)=> {
    try{
        const recipes = await Recipes.getRecipes()
        res.status(200).json(recipes)
    }
    catch(err){
        res.status(500).json({message: "something went wrong"})
    }
})

module.exports = router;