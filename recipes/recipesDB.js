const db = require('../data/db-config');


module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
}

function getRecipes() {
    return db('recipes')
};

function getShoppingList(id) {
    return db('ingredients')
    .join('recipe_ingreds', 'ingredients.id', '=', '')
};

function getInstructions(id) {
    return db('recipes')
}