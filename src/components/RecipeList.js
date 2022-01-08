import { Link } from 'react-router-dom'

import './RecipeList.css'

export default function RecipeList({ recipes }) {

  if (recipes.length === 0) {
    return <div className="error">No recipes in our database.</div>
  }

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe.id} className="card">
          <h3>{recipe.title}</h3>
          <div className="cook-time">{recipe.cookingTime}</div>
          <p>{recipe.method.substring(0,100)}...</p>
          <Link to={`/recipes/${recipe.id}`}>Cook this</Link>
        </div>
      ))}
    </div>
  )
}
