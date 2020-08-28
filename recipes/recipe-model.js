const db = require("../data/db-config.js");

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
};

function getRecipes() {
    return db("recipes");
}

function getShoppingList(recipe_id){
    return db("recipes")
        .where({ ingredientId: id })
        .leftjoin("ingredients as i", recipes.ingredientId, i.id)
        .select("recipe.id", "recipe.name", i.ingredents)
        
}

function getInstructions(recipe_id) {
    return db("instructions").where({ recipe_id }).first();
}