
exports.seed = function(knex) {
  const combo = [
    {
      recipe_id: 1,
      ingredient_id: 1,
      quantity: '2 TBSP',
    },
    {
      recipe_id: 1,
      ingredient_id: 2,
      quantity: '2 slices',
    },
    {
      recipe_id: 2,
      ingredient_id: 3,
      quantity: '1 packet',
    },
    {
      recipe_id: 2,
      ingredient_id: 4,
      quantity: '2 CUPS',
    },
    {
      recipe_id: 3,
      ingredient_id: 5,
      quantity: '1/4 CUPS',
    },
    {
      recipe_id: 3,
      ingredient_id: 6,
      quantity: '1 CUP',
    },
  ];

  return knex('recipe_ingreds').insert(combo)
};
