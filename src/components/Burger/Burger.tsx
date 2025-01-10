type BurgerProps = {
  burgerIngredients: { name: string; count: number }[];
  totalCost: number;
};

const Burger: React.FC<BurgerProps> = ({ burgerIngredients, totalCost }) => {
  return (
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
  );
};

export default Burger;