import './App.css';
import { useState } from 'react';
import SaladImage from './assets/Salad.png';
import CheeseImage from './assets/Cheese.png';
import MeatImage from './assets/Meat.png';
import BaconImage from './assets/Bacon.png';

const INGREDIENTS = [
  { name: 'Salad', price: 10, image: SaladImage },
  { name: 'Cheese', price: 50, image: CheeseImage },
  { name: 'Meat', price: 80, image: MeatImage },
  { name: 'Bacon', price: 60, image: BaconImage },
];

const App = () => {
  const [burgerIngredients, setBurgerIngredients] = useState<{ name: string; count: number }[]>([]);

  const ingredientPrices = INGREDIENTS.reduce((acc, { name, price }) => {
    acc[name] = price;
    return acc;
  }, {} as Record<string, number>);

  const addIngredient = (ingredientName: string) => {
    setBurgerIngredients((prev) => {
      const updatedIngredients = prev.map((ingredient) =>
        ingredient.name === ingredientName
          ? { ...ingredient, count: ingredient.count + 1 }
          : ingredient
      );

      if (!updatedIngredients.some((ingredient) => ingredient.name === ingredientName)) {
        updatedIngredients.push({ name: ingredientName, count: 1 });
      }

      return updatedIngredients;
    });
  };

  const removeIngredient = (ingredientName: string) => {
    setBurgerIngredients((prev) =>
      prev
        .map((ingredient) =>
          ingredient.name === ingredientName && ingredient.count > 0
            ? { ...ingredient, count: ingredient.count - 1 }
            : ingredient
        )
        .filter((ingredient) => ingredient.count > 0)
    );
  };

  const totalCost = burgerIngredients.reduce((acc, { name, count }) => acc + (ingredientPrices[name] || 0) * count, 30);

  const getIngredientCount = (ingredientName: string) => {
    const ingredient = burgerIngredients.find((item) => item.name === ingredientName);
    return ingredient ? ingredient.count : 0;
  };

  return (
    <>
      <h1>Build your burger</h1>
      <div className="main-container">
        <div className="ingredients">
          <h2>Ingredients</h2>
          {INGREDIENTS.map((ingredient) => (
            <div
              className="ingredient"
              key={ingredient.name}
              onClick={() => addIngredient(ingredient.name)}
            >
              <div className="ingredient-item">
                <img className="images" src={ingredient.image} alt={ingredient.name} />
                <p className="names">
                  {ingredient.name} ({getIngredientCount(ingredient.name)}x)
                </p>
                <button
                  className="btnDelete"
                  onClick={(e) => {
                    e.stopPropagation();
                    removeIngredient(ingredient.name);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
        <hr />
        <div className="burger">
          <h2>Burger</h2>
          <div className="Burger">
            <div className="BreadTop">
              <div className="Seeds1"></div>
              <div className="Seeds2"></div>
            </div>
            {burgerIngredients.map(({ name, count }) => {
              const ingredientComponents = [];
              for (let i = 0; i < count; i++) {
                ingredientComponents.push(<div key={`${name}-${i}`} className={name}></div>);
              }
              return ingredientComponents;
            })}
            <div className="BreadBottom"></div>
          </div>
          <h3>Total: {totalCost} сом</h3>
        </div>
      </div>
    </>
  );
};

export default App;