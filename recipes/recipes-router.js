const express = require('express');
const { restart } = require('nodemon');

const Recipes = require('./recipes-model');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
        res.status(200).json({ data: recipes })
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get recipes'});
    });
});

router.get('/:id/ingredients', (req, res) => {
    Recipes.getShoppingList(req.params.id)
    .then(list => {
        res.status(200).json({ data: list })
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get ingredients list'})
    });
});

router.get('/recipes', (req, res) => {
    Recipes.getInstructions(req.params.id)
    .then(instructions => {
        res.status(200).json({ data: instructions })
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get instructions'})
    });
});

router.get('/list', (req, res) => {
    Recipes.getRecipesList()
    .then(list => {
        res.status(200).json({ data: list })
    })
    .catch(err => {
        res.status(500).json({ message: 'Failed to get list of recipes'})
    });
});

module.exports = router;

