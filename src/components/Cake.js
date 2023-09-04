const Cake = ({ cake }) => {

  const ingredientsList = cake.ingredients.map((ingredient, index) => <li key={index}>{ingredient}</li>);

  return (
    <>
      <div className="cake-component">
        <h2 className="cake-name">{cake.cakeName}</h2>
        <div className="cake-properties">
          <p>Ingredients</p>
            <ul className="ingredients-list">{ingredientsList}</ul>
            <p>Price: {cake.price}</p>
            <p>Rating: {cake.rating}</p>
        </div>

      </div>
    </>
  )
}

export default Cake;