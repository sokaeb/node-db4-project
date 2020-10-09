
exports.seed = function(knex) {
 const recipes = [
  { // 1
    recipe_name: 'Peanut Butter Sandwich',
    instructions: '1. Using a butter knife, scrape about 2tbsp of pb from jar. 2. Evenly spread the pb on one slice. 3. Repeat on the other slice if desired. 4. Put both slices together, enjoy!',
  },
  { // 2
    recipe_name: 'Instant Noodles',
    instructions: '1. Boil 2 cups of water. 2. Place the noodles in the boiling water. 3. Break apart noodles and boil for 2-3 minutes. 4. Sprinkle the seasonings over the noodles and mix well. 5. Transfer to bowl, enjoy!',
  },
  {  // 3
    recipe_name: 'Hot Chocolate',
    instructions: '1. Heat up a cup of milk to desired temperature. 2. In a mug, add about 1/4 cup of chocolate chips. 3. Pour the hot milk in the mug and mix until chips are melted, enjoy!',
  },
 ];

 return knex('recipes').insert(recipes);
};
