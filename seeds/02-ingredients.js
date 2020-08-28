exports.seed = function(knex) {
    return knex("ingredients").insert([
        {
            recipe_id: 1,
            quantity: 1,
            ingredient: "beef roast",
        },
        { recipe_id: 1, 
            quantity: "1 package", 
            ingredient: "dried Italian salad dressing mix" 
        },
        {
            recipe_id: 1,
            quantity: "1 package",
            ingredient: "brown gravy mix",
        },
        {
            recipe_id: 1,
            quantity: "1 package",
            ingredient: "dry ranch dressing mix",
        },
        {
            recipe_id: 1,
            quantity: "1/2 cup",
            ingredient: "water",
        },
        {
            recipe_id: 2,
            quantity: "1 lb",
            ingredient: "asparagus",
        },
        {
            recipe_id: 2,
            quantity: "1 1/2 tbsp",
            ingredient: "olive oil",
        },
        {
            recipe_id: 2,
            quantity: "1/2 tsp",
            ingredient: "kosher salt",
        },
        
    ]);
};
