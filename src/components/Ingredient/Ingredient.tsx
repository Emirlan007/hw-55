type Ingredient = {
  name: string;
  image: string;
  count: number;
  onAdd: () => void;
  onRemove: () => void;
};

const Ingredient: React.FC<Ingredient> = ({ name, image, count, onAdd, onRemove }) => {
  return (
    <div className="ingredient">
      <div className="ingredient-item">
        <img className="images" src={image} alt={name}/>
        <p className="names">
          {name} ({count}x)
        </p>
        <button onClick={onAdd}>Add</button>
        <button className="btnDelete" onClick={onRemove}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Ingredient;