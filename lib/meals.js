'use strict';

let mealObj = {
  name: 'Erin Sullivan',
  age: 25,
  calorieTarget: 1500,
  meals: [
    {
      title: 'breakfast',
      date: '2016-5-16',
      description: 'yogurt',
      calories: 200
    },
    {
      title: 'lunch',
      date: '2016-5-16',
      description: 'b good salad',
      calories: 500
    },
    {
      title: 'dinner',
      date: '2016-5-17',
      description: 'chicken and rice',
      calories: 400
    },
    {
      title: 'lunch',
      date: '2016-5-18',
      description: 'rice and kimchi',
      calories: 400
    },
  ],
  caloriesEatenOn: function(date){
    let caloriesEaten = 0;
    for(let i = 0; i<this.meals.length; i++){
      if (date === mealObj.meals[i].date){
        caloriesEaten += mealObj.meals[i].calories;
      }
    }
    return caloriesEaten;
  }
};
