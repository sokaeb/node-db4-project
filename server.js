const express = require('express');
const helmet = require('helmet');
const RecipeRouter = require('./recipes/recipes-router');
// const db = require('./data/db-config');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('/recipes', RecipeRouter);

// server.get('/recipes', (req, res) => {
//     db('recipes')
//     .then(recipes => {
//         res.status(200).json({ data: recipes });
//     })
//     .catch(error => {
//         res.status(500).json({ message: "Error getting recipes." })
//     });
// });

server.get('/ingredients', (req, res) => {
    db('ingredients')
    .then(ings => {
        res.status(200).json({ data: ings });
    })
    .catch(error => {
        res.status(500).json({ message: "Error getting recipes." })
    })
})
module.exports = server;