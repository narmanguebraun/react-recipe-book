import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:3000/recipes/' + id
  const { error, isPending, data: recipe } = useFetch(url)

  return (
    <div className="recipe">
      {error && <p className="error">{error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {recipe && (
        <>
          <h2 className="page_title">{recipe.title}</h2>
          <div className="cook-time">{recipe.cookingTime}</div>
          <ul>
            {recipe.ingredients.map(ing => <li key={ing}>{ing}</li>)}
          </ul>
          <div className="method">{recipe.method}</div>
        </>
        )}
    </div>
  )
}
