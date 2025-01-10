import Ingredient from '../Ingredient/Ingredient.tsx';
import { INGREDIENTS } from '../../App.tsx';

type IngredientListProps = {
  burgerIngredients: { name: string; count: number }[];
  addIngredient: (ingredientName: string) => void;
  removeIngredient: (ingredientName: string) => void;
};

const IngredientList: React.FC<IngredientListProps> = ({ burgerIngredients, addIngredient, removeIngredient }) => {
  return (
    <div className="ingredients">
      <h2>Ingredients</h2>
      {INGREDIENTS.map((ingredient) => {
        const ingredientCount = burgerIngredients.find((item) => item.name === ingredient.name)?.count || 0;
        return (
          <Ingredient
            key={ingredient.name}
            name={ingredient.name}
            image={ingredient.image}
            count={ingredientCount}
            onAdd={() => addIngredient(ingredient.name)}
            onRemove={() => removeIngredient(ingredient.name)}
          />
        );
      })}
    </div>
  );
};

export default IngredientList;