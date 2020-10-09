const db = require('../data/db-config');


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
    getRecipesList,
}

function getRecipes() {
    return db('recipes')
};

function getShoppingList(id) {
// SELECT recipes.recipe_name, ingredients.ingredient_name , recipe_ingreds.quantity ---
    // FROM recipes ---
    // JOIN recipe_ingreds  -----
    // ON recipes.id = recipe_ingreds.recipe_id ----
    // JOIN ingredients ----
    // ON ingredients.id = recipe_ingreds.ingredient_id ---
    // WHERE recipes.id = 3;
    return db('recipes')
    .select('recipes.recipe_name', 'ingredients.ingredient_name', 'recipe_ingreds.quantity')
    .join('recipe_ingreds', 'recipes.id', '=', 'recipe_ingreds.recipe_id')
    .join('ingredients', 'ingredients.id', '=', 'recipe_ingreds.ingredient_id')
    .where('recipes.id', id)
};

function getInstructions(id) {
//SELECT recipes.recipe_name as Recipe, recipes.instructions as Instructions
// FROM recipes
// WHERE recipes.id = 3;
    return db('recipes')
    .select('recipes.recipe_name', 'recipes.instructions')
    .where('recipes.id', id)
};

function getRecipesList(){
    return db('recipes')
    .select('recipes.recipe_name')
};