exports.seed = function(knex) {
  const ingredients = [
   {
    ingredient_name: 'peanut butter', // 1
   },
   {
    ingredient_name: 'bread', // 2
   },
   {
    ingredient_name: 'noodles', // 3
   },
   {
    ingredient_name: 'water', // 4
   },
   {
    ingredient_name: 'chocolate chips', // 5
   },
   {
    ingredient_name: 'milk', // 6
   },
  ];
 
  return knex('ingredients').insert(ingredients);
 };
