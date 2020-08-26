exports.seed = function(knex) {
    return knex("instructions").insert([
        {
            recipe_id: 1,
            step_number: 1,
            instructions: "Place beef roast in crock pot.",
        },
        {
            recipe_id: 1,
            step_number: 2,
            instructions: "Mix the dried mixes together in a bowl and sprinkle over the roast.",
        },
        {
            recipe_id: 1,
            step_number: 3,
            instructions: "Pour the water around the roast.",
        },
        {
            recipe_id: 1,
            step_number: 4,
            instructions: "Cook on low for 7-9 hours.",
        },
        {
            recipe_id: 2,
            step_number: 1,
            instructions: "Preheat oven to 425°F.",
        },
        {
            recipe_id: 2,
            step_number: 2,
            instructions: "Cut off the woody bottom part of the asparagus spears and discard.",
        },
        {
            recipe_id: 2,
            step_number: 3,
            instructions: "With a vegetable peeler, peel off the skin on the bottom 2-3 inches of the spears.",
        },
        {
            recipe_id: 2,
            step_number: 4,
            instructions: "Place asparagus on foil-lined baking sheet and drizzle with olive oil.",
        },
        {
            recipe_id: 2,
            step_number: 5,
            instructions: "Sprinkle with salt.",
        },
        {
            recipe_id: 2,
            step_number: 6,
            instructions: "With your hands, roll the asparagus around until they are evenly coated with oil and salt.",
        },
        {
            recipe_id: 2,
            step_number: 7,
            instructions: "Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.",
        },
        {
            recipe_id: 2,
            step_number: 8,
            instructions: "Roast for 10-15 minutes, depending on the thickness of your stalks and how tender you like them.",
        },
        {
            recipe_id: 2,
            step_number: 9,
            instructions: "They should be tender when pierced with the tip of a knife.",
        },
        {
            recipe_id: 2,
            step_number: 10,
            instructions: "The tips of the spears will get very brown but watch them to prevent burning.",
        },
        {
            recipe_id: 2,
            step_number: 8,
            instructions: "They are great plain, but sometimes I serve them with a light vinaigrette if we need something acidic to balance out our meal.",
        },
    ]);
};