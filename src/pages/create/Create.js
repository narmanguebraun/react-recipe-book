import { useState, useRef } from 'react'
import { useFetch } from '../../hooks/useFetch'
import './Create.css'

export default function Create() {
  const [title, setTitle] = useState('')
  const [method, setMethod] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [newIngredient, setNewIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])
  const ingredientInput = useRef(null)

  const { postData, data, error } = useFetch('http://localhost:3000/recipes', 'POST')

  const handleSubmit = (e) => {
    e.preventDefault()
    postData({ title, ingredients, method, cookingTime: cookingTime + ' minutes' })
  }
  // no need id, JSON SERVER automatically adds a unique id when it saves new data to its files

  const handleAdd = (e) => {
    e.preventDefault()
    const ing = newIngredient.trim() // delete input space

    if (ing && !ingredients.includes(ing)) {
      setIngredients(prevIngredients => [...prevIngredients, ing])
    }
    setNewIngredient('')
    ingredientInput.current.focus()
  }

  return (
    <div className="create">
      <h2>New Recipe</h2>

      <form onSubmit={handleSubmit}>

        <label>
          <span>Title:</span>
          <input 
            type="text" 
            onChange={(e) => setTitle(e.target.value)} 
            value={title}
            required
          />
        </label>

        <label>
          <span>Cooking Time (minutes):</span>
          <input 
            type="number" 
            onChange={(e) => setCookingTime(e.target.value)} 
            value={cookingTime}
            required
          />
        </label>

        <label>
          <span>Ingredients:</span>
          <div className="ingredients">
            <input 
              type="text" 
              onChange={(e) => setNewIngredient(e.target.value)} 
              value={newIngredient}
              ref={ingredientInput}
              required
            />
            <button onClick={handleAdd} className="">add</button>
          </div>
        </label>

        <p>Current ingredients:</p>
        <ul>{ingredients.map(i => <li key={i}>{i}</li>)}</ul>

        <label>
          <span>Method:</span>
          <textarea 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            required
          />
        </label>

        <button className="btn">Add New Recipe</button>

      </form>
    </div>
    )
}
